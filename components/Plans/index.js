import React from 'react';
import SectionTitle from '../SectionTitle';
import SmallText from '../SmallText';
import Plan from './Plan';

function Plans() {
    const plans = [
        {
            plan_id: '923fb6b1-ca34-4825-b58d-f240be378cd1',
            name: 'Beginner',
            desc: 'Perfect to get a better idea of what the sponsor leads look like',
            features: [
                { key: '10 sponsor leads/week', available: true },
                { key: 'Company industry', available: true },
                { key: 'Access to 1000+ database', available: false },
            ],
            price: 0,
        },
        {
            plan_id: '29c10bbe-e1d9-432d-b49e-cf9321c11255',
            name: 'Professional',
            desc: 'For content creators who want to maximize sponsor outreach',
            features: [
                { key: '100+ sponsor leads/week', available: true },
                {
                    key: 'Access to 1000+ database',
                    available: true,
                },
                { key: 'Verified contact email', available: true },
                { key: 'Verified social media links', available: true },
            ],
            price: 29,
        },
    ];
    return (
        <div>
            <SectionTitle text={'Unlock more paid brand deals for your content'} />
            <div className="mt-2">
                <SmallText
                    text={
                        'Forget agencies, be your own sales rep. We show you hot new brand deals so you can get clients faster.'
                    }
                    textApply={false}
                    leadingTight={true}
                />
            </div>
            <div className="plans mt-2 flex flex-col items-center justify-center gap-2">
                {plans.map((plan, i) => (
                    <Plan key={plan.plan_id} details={plan} />
                ))}
            </div>
        </div>
    );
}

export default Plans;
