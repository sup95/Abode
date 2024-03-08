<template>
<div class="container">
    <div class="sidebar">
      <a href="/"><img :src="require('../assets/SupriyaSrivatsa.jpg')" class="photoImg" title="Home"/></a>
      <a href="/blog/"><img :src="require('../assets/navigators/blog.png')" class="navImages" title="Blog"/></a></span>
      <a href="/bookshelf/"><img :src="require('../assets/navigators/reading.png')" class="navImages" title="Bookshelf"/></a></span>
      <a href="/talks/"><img :src="require('../assets/navigators/mic.png')" class="navImages" title="Talks"/></a></span>
      <a href="/reachout/"><img :src="require('../assets/navigators/reachout.png')" class="navImages" title="Reach Out"/></a></span>
    </div>

    <div class="goodreads-widget">
        <h1> Bookshelf </h1>

              <!-- Show static HTML/CSS as a placeholder in case js is not enabled - javascript include will override this if things work -->
      <style type="text/css" media="screen">
  .gr_custom_container_1709894953 {
    /* customize your Goodreads widget container here*/
    border: 0px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: #FFFFFF;
    color: #000000;
    
  }
  .gr_custom_header_1709894953 {
    /* customize your Goodreads header here*/
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 80%
  }
  .gr_custom_each_container_1709894953 {
    /* customize each individual book container here */
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
  }
  .gr_custom_book_container_1709894953 {
    /* customize your book covers here */
    overflow: hidden;
    height: 160px;
      float: left;
      margin-right: 4px;
      width: 98px;
  }
  .gr_custom_author_1709894953 {
    /* customize your author names here */
    font-size: 10px;
  }
  .gr_custom_tags_1709894953 {
    /* customize your tags here */
    font-size: 10px;
    color: gray;
  }
  .gr_custom_rating_1709894953 {
    /* customize your rating stars here */
    float: right;
  }
</style>

      <div id="gr_custom_widget_1709894953">
          <div class="gr_custom_container_1709894953">
    <h2 class="gr_custom_header_1709894953">
    <a style="text-decoration: none;" rel="nofollow" href="https://www.goodreads.com/review/list/96218233-supriya-srivatsa?shelf=read&amp;utm_medium=api&amp;utm_source=custom_widget">Recent Reads</a>
    </h2>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="Man’s Search for Meaning" rel="nofollow" href="https://www.goodreads.com/review/show/6315339157?utm_medium=api&amp;utm_source=custom_widget"><img alt="Man’s Search for Meaning" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535419394l/4069._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="it was ok"><img alt="it was ok" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/6315339157?utm_medium=api&amp;utm_source=custom_widget">Man’s Search for Meaning</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/2782.Viktor_E_Frankl">Viktor E. Frankl</a>
          </div>
          <div class="gr_custom_review_1709894953">
            Given how popular and withstanding this book is, I really wanted to like the book, but I honestly struggled with it. I found the first part highly dispassionate, the second part highly jargonistic, and the third part a mere repetitive su...
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="Persepolis: The Story of a Childhood (Persepolis, #1)" rel="nofollow" href="https://www.goodreads.com/review/show/3911204066?utm_medium=api&amp;utm_source=custom_widget"><img alt="Persepolis: The Story of a Childhood" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1425871473l/9516._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3911204066?utm_medium=api&amp;utm_source=custom_widget">Persepolis: The Story of a Childhood</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/6238.Marjane_Satrapi">Marjane Satrapi</a>
          </div>
          <div class="gr_custom_review_1709894953">
            Gripping graphics and a harrowing tale.
A highly recommended read to understand Iran's changing landscapes, and the ground realities and perspectives.
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="The Housemaid (The Housemaid, #1)" rel="nofollow" href="https://www.goodreads.com/review/show/5883803036?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Housemaid" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646534743l/60556912._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="liked it"><img alt="liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/5883803036?utm_medium=api&amp;utm_source=custom_widget">The Housemaid</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/7244758.Freida_McFadden">Freida McFadden</a>
          </div>
          <div class="gr_custom_review_1709894953">
            I liked The Housemaid as a fast read; it is easy to read and constantly keeps you turning pages. It was fun to binge read it! The tagline (&quot;From behind closed doors, she sees everything&quot;) and the book blurb are very misleading. I was let...
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="Normal People" rel="nofollow" href="https://www.goodreads.com/review/show/6221484443?utm_medium=api&amp;utm_source=custom_widget"><img alt="Normal People" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571423190l/41057294._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/6221484443?utm_medium=api&amp;utm_source=custom_widget">Normal People</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/15860970.Sally_Rooney">Sally Rooney</a>
          </div>
          <div class="gr_custom_review_1709894953">
            3.5 stars
If I begin to peel the layers of the book, looking at the story, the plot, the characters, the flow, it sure feels like there isn't a lot to it. But, what I really liked and what kept me going through the book is Sally Rooney's...
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="This Other Eden" rel="nofollow" href="https://www.goodreads.com/review/show/6193343861?utm_medium=api&amp;utm_source=custom_widget"><img alt="This Other Eden" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1665472154l/61089492._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="it was amazing"><img alt="it was amazing" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/6193343861?utm_medium=api&amp;utm_source=custom_widget">This Other Eden</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/4371731.Paul_Harding">Paul Harding</a>
          </div>
          <div class="gr_custom_review_1709894953">
            This Other Eden by Paul Harding is an immensely moving and heart-warming book. It is beautifully lyrical, and I enjoyed how the words and sentences seem to sing in a rhythm Paul Harding has concocted. I particularly enjoyed the writer's ...
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="Remarkably Bright Creatures" rel="nofollow" href="https://www.goodreads.com/review/show/5987495349?utm_medium=api&amp;utm_source=custom_widget"><img alt="Remarkably Bright Creatures" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651600548l/58733693._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/5987495349?utm_medium=api&amp;utm_source=custom_widget">Remarkably Bright Creatures</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/21374195.Shelby_Van_Pelt">Shelby Van Pelt</a>
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="Lessons in Chemistry" rel="nofollow" href="https://www.goodreads.com/review/show/5121784976?utm_medium=api&amp;utm_source=custom_widget"><img alt="Lessons in Chemistry" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634748496l/58065033._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="liked it"><img alt="liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/5121784976?utm_medium=api&amp;utm_source=custom_widget">Lessons in Chemistry</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/21370624.Bonnie_Garmus">Bonnie Garmus</a>
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="Ghachar Ghochar" rel="nofollow" href="https://www.goodreads.com/review/show/6067446527?utm_medium=api&amp;utm_source=custom_widget"><img alt="Ghachar Ghochar" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1481656773l/30267604._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/6067446527?utm_medium=api&amp;utm_source=custom_widget">Ghachar Ghochar</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/787768.Vivek_Shanbhag">Vivek Shanbhag</a>
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="Eleanor Oliphant Is Completely Fine" rel="nofollow" href="https://www.goodreads.com/review/show/3909952830?utm_medium=api&amp;utm_source=custom_widget"><img alt="Eleanor Oliphant Is Completely Fine" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493724347l/31434883._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="liked it"><img alt="liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3909952830?utm_medium=api&amp;utm_source=custom_widget">Eleanor Oliphant Is Completely Fine</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/14558709.Gail_Honeyman">Gail Honeyman</a>
          </div>
      </div>
      <div class="gr_custom_each_container_1709894953">
          <div class="gr_custom_book_container_1709894953">
            <a title="At Night All Blood is Black" rel="nofollow" href="https://www.goodreads.com/review/show/6067444660?utm_medium=api&amp;utm_source=custom_widget"><img alt="At Night All Blood is Black" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581398524l/50403480._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1709894953">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1709894953">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/6067444660?utm_medium=api&amp;utm_source=custom_widget">At Night All Blood is Black</a>
          </div>
          <div class="gr_custom_author_1709894953">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/680966.David_Diop">David Diop</a>
          </div>
      </div>
  <br style="clear: both"/>
  <center>
    <a rel="nofollow" href="https://www.goodreads.com/"><img alt="goodreads.com" style="border:0" src="https://s.gr-assets.com/images/widget/widget_logo.gif" /></a>
  </center>
  <noscript>
    Share <a rel="nofollow" href="https://www.goodreads.com/">book reviews</a> and ratings with Supriya, and even join a <a rel="nofollow" href="https://www.goodreads.com/group">book club</a> on Goodreads.
  </noscript>
  </div>

      </div>
      <script src="https://www.goodreads.com/review/custom_widget/96218233.Recent%20Reads?cover_position=left&cover_size=medium&num_books=10&order=d&shelf=read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=0&show_title=1&sort=date_read&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=none&widget_id=1709894953&widget_text_color=000000&widget_title_size=small&widget_width=full" type="text/javascript" charset="utf-8"></script>

</div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans");

.sidebar {
  margin: 0;
  padding: 0px;
  width: auto;
  position: fixed;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar a {
  padding: 10px;
  margin: 20px 8px;
}

.navImages-active {
  height: 36px;
}

.navImages {
  height: 26px;
}

.photoImg {
  height: 50px;
  border-radius: 30%;
}

@media screen and (max-width: 500px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .sidebar a {
    align-content: center;
  }
}

.goodreads-widget {
  font-family: "PT Sans", sans-serif;
  text-align: justify;
  padding: 20px;

  max-width: 650px;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 500px) {
  .goodreads-widget {
    width: 85%;
  }
}
</style>
