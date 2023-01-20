/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_PUBLIC_STRIPE_SECRET_KEY:
            'sk_test_51Hp8gKEhskqVAwrw1vcbenMyKucfDgRngHp5dDA6psNscmYE72N6lgZ2YEHtENKVOUivutURS750ifrMfxVN0SCX00RTiQLTf3',
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
            'pk_test_51Hp8gKEhskqVAwrw3FtKoOqoZ8rbrWSerS05PT0yBf0Pk3MrBPiogF57jwQLkS6Yf4mgTWXakqwsdsbj9lgG1KxL00szz0DI40',
    },
};

module.exports = nextConfig;
