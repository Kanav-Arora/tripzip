import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell,
    useUpdateAction,
    MessageActionStatusEnum,
} from "@novu/notification-center";
import { useAuth } from "../../../context/Auth/useAuth";
import axios from "axios";
import { backendOrigin } from "../../../frontend.config";

export const customStyles = (isDark) => {
    return {
        bellButton: {
            root: {
                svg: {
                    color: isDark === false ? "white" : "black",
                    strokeWidth: "0.1",
                    width: "1.5rem",
                    height: "1.5rem",
                }
            },
            dot: {
                rect: {
                    fill: "orange",
                    strokeWidth: "0",
                    width: "5px",
                    height: "5px",
                }
            }
        }
    };
}

const CustomNotificationCenter = () => {
    const { updateAction } = useUpdateAction();
    const handleOnActionClick = async (
        templateIdentifier,
        btnType,
        notification
    ) => {
        if (templateIdentifier === "trip-zip-actionable") {
            const payload = notification.payload;
            let approved = '';
            if (btnType === "primary") {
                approved = "true";
            }
            else if (btnType === "secondary") {
                approved = "false";
            }
            const instance = axios.create({
                withCredentials: true,
                baseURL: backendOrigin,
            });
            const result = await instance.post(`/trips/response-trip-request?tripID=${payload.tripID}&uid=${payload.uid}&approved=${approved}`);
            if (result.status !== 201) {
                console.error('Unexpected status code:', result.status);
                return;
            }
            updateAction({
                messageId: notification._id,
                actionButtonType: btnType,
                status: MessageActionStatusEnum.DONE,
            });
        }
    };
    return <PopoverNotificationCenter
        colorScheme="light"
        onNotificationClick={null}
        onActionClick={handleOnActionClick}
    >
        {({ unseenCount }) =>
            <NotificationBell unseenCount={unseenCount}
                colorScheme="light"
            />}
    </PopoverNotificationCenter>
}

export default function NotificationCenter({ isDark }) {
    const { authStateValue } = useAuth();
    return (
        <NovuProvider
            subscriberId={authStateValue.uid}
            applicationIdentifier={process.env.REACT_APP_NOVU_APP_IDENTIFIER}
            styles={customStyles(isDark)}
        >
            <CustomNotificationCenter />
        </NovuProvider>
    )
}
