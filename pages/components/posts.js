import 'isomorphic-fetch';


class Posts extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: []
    };
  };

  async componentDidMount(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    this.setState({ posts });
  }

  render(){
    const { posts } = this.state;
    return(
      <div className="questionsAnswered">
        <h3>Posts</h3>
        {(posts && posts.length > 0) ?
        <ul>
          {posts.map(post => <li>{post.title}</li>)}
        </ul> :  <p>No entries</p>}
        <style jsx>{`
          .questionsAnswered {
            border: 1px solid green;
          }
        `}</style>
      </div>
    );
  }
};

export default Posts;
