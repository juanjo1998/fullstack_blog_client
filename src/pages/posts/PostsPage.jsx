export const PostsPage = () => {
  return (
    <div className="post">
      <div className="post__image-container">
        <img
          className="post__image"
          src="https://images.unsplash.com/photo-1707145301260-8d5c3dc9f015?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="post__texts">
        <h2 className="post__title">Lorem ipsum dolor sit amet.</h2>
        <p className="post__author">
          <a href="" className="post__author-name">
            Darwin Alem
          </a>
          <time className="post__author-time">2024-01-04</time>
        </p>
        <p className="post__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, harum
          numquam culpa a recusandae perspiciatis blanditiis temporibus
          cupiditate dicta. In!
        </p>
      </div>
    </div>
  );
};
