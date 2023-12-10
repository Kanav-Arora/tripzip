import React from 'react';
import SectionLayout from '../../modules/Home/SectionLayout';

export default function SectionA() {
    let data = [
        {
            place: 'Switzerland',
            url: 'https://c4.wallpaperflare.com/wallpaper/666/665/244/the-magic-islands-of-lofoten-norway-europe-winter-morning-light-landscape-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840%C3%972160-wallpaper-preview.jpg',
        },
        {
            place: 'Greece',
            url: 'https://wallpaperfx.com/view_image/santorini-greece-1366x768-wallpaper-8680.jpg',
        },
        {
            place: 'Ooty',
            url: 'https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_640.jpg',
        },
        {
            place: 'Switzerland',
            url: 'https://www.wallpapers13.com/wp-content/uploads/2019/07/Bridge-on-the-Rhine-River-Cologne-Germany-Europe-4K-Ultra-HD-Wallpaper-for-Desktop-Laptop-Tablet-Mobile-Phones-And-TV-1920x1080-840x525.jpg',
        },
    ];

    const constants = {
        subheading: 'Sightseeing Tours',
        title: 'Europe Sightseeing Views',
        description:
            "Europe's enchanting beauty is an unrivaled blend of natural beauty and cultural richness",
    };

    return (
        <SectionLayout
            subheading={constants.subheading}
            title={constants.title}
            description={constants.description}
        >
            <div className="flex flex-col gap-y-4 z-0">
                <div className="flex flex-row gap-x-4">
                    <div class="w-3/5 h-[250px] shadow-xl relative overflow-hidden rounded-2xl">
                        <img
                            class="w-full"
                            src={data[0].url}
                            alt="Switzerland"
                        />
                        <div class="absolute bottom-0 left-0 p-4 text-white font-bold">
                            {data[0].place}
                        </div>
                    </div>

                    <div class="w-2/5 h-[250px] shadow-xl relative overflow-hidden rounded-2xl">
                        <img class="w-full" src={data[1].url} alt="Greece" />
                        <div class="absolute bottom-0 left-0 p-4 text-white font-bold">
                            {data[1].place}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-4">
                    <div class="w-2/5 h-[250px] shadow-xl relative overflow-hidden rounded-2xl">
                        <img
                            class="w-full"
                            src={data[2].url}
                            alt="Switzerland"
                        />
                        <div class="absolute bottom-0 left-0 p-4 text-white font-bold">
                            {data[2].place}
                        </div>
                    </div>

                    <div class="w-3/5 h-[250px] shadow-xl relative overflow-hidden rounded-2xl">
                        <img class="w-full" src={data[3].url} alt="Greece" />
                        <div class="absolute bottom-0 left-0 p-4 text-white font-bold">
                            {data[3].place}
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
