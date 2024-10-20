interface BlogType{
    slug: string;
    content: string;
    title: string;
    image?: string;
}
const SampleBlogs: BlogType[] = [
    {
      slug: 'exploring-the-cosmos',
      content: 'A journey through the stars and the mysteries of the universe. In this post, we will explore various celestial bodies and their significance.',
      title: 'Exploring the Cosmos',
      image: 'https://via.placeholder.com/150',
    },
    {
      slug: 'the-art-of-cooking',
      content: 'Delve into the culinary arts with delicious recipes and tips. This post will cover techniques from basic to advanced cooking.',
      title: 'The Art of Cooking',
      image: 'https://via.placeholder.com/150',
    },
    {
      slug: 'technology-trends-in-2024',
      content: 'A look at the latest advancements shaping our future. From AI to quantum computing, we’ll cover the technologies to watch.',
      title: 'Technology Trends in 2024',
      image: 'https://via.placeholder.com/150',
    },
    {
      slug: 'traveling-the-world',
      content: 'Discover the beauty of different cultures and landscapes. This post will highlight must-visit destinations across the globe.',
      title: 'Traveling the World',
      image: 'https://via.placeholder.com/150',
    },
    {
      slug: 'fitness-and-wellness',
      content: 'Tips for maintaining a healthy lifestyle and staying active. We’ll discuss workouts, nutrition, and mental health strategies.',
      title: 'Fitness and Wellness',
      image: 'https://via.placeholder.com/150',
    },
    ,
    {
      slug: 'fitness-and-wellness-blog',
      content: 'Tips for maintaining a healthy lifestyle and staying active. We’ll discuss workouts, nutrition, and mental health strategies.',
      title: 'Fitness and Wellness',
      image: 'https://via.placeholder.com/150',
    },
  ];
export default SampleBlogs;  