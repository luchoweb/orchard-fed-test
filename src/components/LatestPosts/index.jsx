import latestPosts from "../../json/latest-posts.json";

import "../../styles/components/LatestPosts.scss";

export default function LatestPosts() {
  const clickOnLink = (element) => {
    element.preventDefault();
    console.log(element.target);
  }

  return (
    <section className="container latest-posts">
      <div className="latest-posts__box">
        <h2 className="latest-posts__title">
          All the latest from AEG
        </h2>

        <div className="latest-posts__grid">
          {latestPosts.map((post) => (
            <article className="latest-posts__card" key={`post-${post.id}`}>
              <picture className="card__image">
                <img src={post.thumbnail.normal} srcSet={`${post.thumbnail.retina} 2x`} alt="card image" />
              </picture>

              <div className="card__content">
                <h3 className="card__title">{post.title}</h3>
                <p className="card__excerpt">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="card__link"
                  onClick={(e) => clickOnLink(e)}
                >
                  Read more <span className="arrow">&#10141;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
