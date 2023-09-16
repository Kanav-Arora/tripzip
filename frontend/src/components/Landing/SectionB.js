import React from 'react'

export default function SectionB() {
    const styles = {
        Main: 'w-full my-20',
        Layout: 'flex justify-center flex-row mobile:flex-col',
        Card: 'relative basis-1/2',
        cardTitle: 'text-base mb-4 text-white tablet:text-lg xlaptop:text-xl',
        cardButton: 'landing-section-b-bordered-button text-white rounded-md py-1 laptop:py-2 xlaptop:py-2 px-2 tablet:px-4  laptop:px-6  xlaptop:px-7',
        buttonText: 'text-sm tablet:text-base xlaptop:text-lg text-inherit'
    };
    return (
        <div className={styles.Main}>
            <div className={styles.Layout}>
                <div className={styles.Card}>
                    <img src={'/images/landing_nature.png'} alt="Nature Image" />
                    <div className="landing-section-b-card-content">
                        <h2 className={styles.cardTitle}>Explore Nature</h2>
                        <button className={styles.cardButton}><h2 className={styles.buttonText}>View Packages</h2></button>
                    </div>
                </div>
                <div className={styles.Card}>
                    <img src={'/images/landing_cities.png'} alt="City Image" />
                    <div className="landing-section-b-card-content">
                        <h2 className={styles.cardTitle}>Explore Cities</h2>
                        <button className={styles.cardButton}><h2 className={styles.buttonText}>View Packages</h2></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
