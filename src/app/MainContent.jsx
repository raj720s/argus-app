import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <h1 className="text-3xl">Jay Jagannath Swami</h1>
      <section className="content-section">
        <h2>Featured Articles</h2>
        <article>
          <h3>Article Title 1</h3>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Article 1" />
          <p>Article content...</p>
        </article>
        <article>
          <h3>Article Title 2</h3>
          <img src="https://www.abc.net.au/news/image/9379092-3x2-700x467.jpg" alt="Article 2" />
          <p>Article content...</p>
        </article>
      </section>
    </main>
  );
}

export default MainContent;
