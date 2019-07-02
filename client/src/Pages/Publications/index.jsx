import React from "react";
import Publication from "../../components/Publication";

import axios from "axios";

const publicationsUrl =
  "http://nairobilawtutors.co.ke/wp-json/wp/v2/publications";

class Publications extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(publicationsUrl)
      .then(publications => this.setState({ posts: publications.data }));
  }

  render() {
    let publicationCards = [];

    console.log(this.state);

    this.state.posts.length > 1
      ? (publicationCards = this.state.posts.map((post, key) => (
          <Publication
            author="CBG"
            title={post.title.rendered}
            date={post.date}
            fileUrl={post.acf.file}
            key={key}
          />
        )))
      : (publicationCards = <div>Loading...</div>);

    return (
      <section className="publications box-layout">{publicationCards}</section>
    );
  }
}

export default Publications;
