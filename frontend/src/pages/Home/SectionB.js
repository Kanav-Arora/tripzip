import React, { useEffect, useRef } from 'react';
import { ImgWithFallback } from '../../assets/utilities';
import { CalendarMini } from '../../assets/ext-icon';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconProvider } from '../../modules/ui/IconProvider/IconProvider';

const Card = ({ Icon, title, description }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.3 },
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className={
                'my-4 gap-x-4 rounded-2xl p-6 flex flex-row bg-gray-100 shadow-md'
            }
        >
            <div className={'p-2 rounded-lg h-fit bg-white'}>
                <IconProvider size={1} Icon={Icon} />
            </div>
            <div className="flex flex-col">
                <div className="text-black text-md">{title}</div>
                <div className="text-gray-500 text-sm">{description}</div>
            </div>
        </motion.div>
    );
};

export default function SectionB() {
    const scrollRef = useRef(null);
    const controls = useAnimation();

    const steps = [
        {
            title: 'Find your destination',
            description:
                'Embark on a journey to discover your dream destination',
        },
        {
            title: 'Explore trips',
            description:
                'Explore trips hosted by others and get info on itinerary, budget, group members',
        },
        {
            title: 'Make a request',
            description:
                'Connect with the host, make plans and make a request to join',
        },
        {
            title: 'Enjoy your trip',
            description:
                "You'll be immersed in a captivating tapestry of sights, sounds and tastes",
        },
    ];

    const handleScroll = async () => {
        await controls.start({ opacity: 1, x: 0 });
    };

    return (
        <div className="my-28 mx-40 flex flex-row gap-x-10">
            <div className="w-2/5 h-[400px] bg-black rounded-lg">
                <ImgWithFallback
                    src={'/Images/beach.jpg'} // Adjusted image path
                    fallback={'/Images/beach.jpg'} // Adjusted image path
                    className="rounded-lg"
                    alt={'Beach Image'}
                    loading="lazy" // Apply lazy loading
                />
            </div>
            <div className="w-3/5 flex flex-col">
                <div className="text-gray-500 text-sm pl-4">How it works</div>
                <div className="text-black text-4xl font-bold pl-4 mb-5">
                    One click for you
                </div>
                <div
                    className="flex-grow overflow-y-auto"
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            Icon={CalendarMini}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
