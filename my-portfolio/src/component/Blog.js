export function Blog() {
    const blogPosts = [
      {
        title: "Getting Started with React Hooks",
        date: "2023-05-15",
        excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
        link: "/blog/react-hooks",
      },
      {
        title: "Building RESTful APIs with NestJS",
        date: "2023-04-22",
        excerpt: "Explore how to create scalable and maintainable backend services using NestJS framework.",
        link: "/blog/nestjs-apis",
      },
    ]
  
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-blue-600 hover:text-blue-800">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }