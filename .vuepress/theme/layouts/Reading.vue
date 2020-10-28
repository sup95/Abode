<template>
<div class="container">
    <div class="sidebar">
      <a href="/"><img :src="require('../assets/SupriyaSrivatsa.jpg')" class="photoImg" title="Home"/></a>
      <a href="/blog/"><img :src="require('../assets/navigators/blog.png')" class="navImages" title="Blog"/></a></span>
      <a href="/bookshelf/"><img :src="require('../assets/navigators/reading.png')" class="navImages" title="Bookshelf"/></a></span>
      <a href="/talks/"><img :src="require('../assets/navigators/mic.png')" class="navImages" title="Talks"/></a></span>
      <a href="/art/"><img :src="require('../assets/navigators/poetry.png')" class="navImages" title="Art"/></a></span>
      <a href="/reachout/"><img :src="require('../assets/navigators/reachout.png')" class="navImages" title="Reach Out"/></a></span>
    </div>

    <div class="goodreads-widget">
        <h1> Bookshelf </h1>
        <!-- Show static HTML/CSS as a placeholder in case js is not enabled - javascript include will override this if things work -->
        <style type="text/css" media="screen">
            .gr_custom_container_1603564919 {
                /* customize your Goodreads widget container here*/
                border: 0px solid gray;
                border-radius:10px;
                padding: 10px 5px 10px 5px;
                background-color: #FFFFFF;
                color: #000000;
                
            }
            .gr_custom_header_1603564919 {
                /* customize your Goodreads header here*/
                border-bottom: 1px solid gray;
                width: 100%;
                margin-bottom: 5px;
                text-align: center;
                font-size: 80%
            }
            .gr_custom_each_container_1603564919 {
                /* customize each individual book container here */
                width: 100%;
                clear: both;
                margin-bottom: 10px;
                overflow: auto;
                padding: 10px;
            }
            .gr_custom_book_container_1603564919 {
                /* customize your book covers here */
                overflow: hidden;
                height: 160px;
                float: left;
                margin-right: 8px;
                width: 98px;
            }
            .gr_custom_author_1603564919 {
                /* customize your author names here */
                font-size: 12px;
            }
            .gr_custom_tags_1603564919 {
                /* customize your tags here */
                font-size: 10px;
                color: gray;
            }
            .gr_custom_rating_1603564919 {
                /* customize your rating stars here */
                float: right;
                padding: 6px;
            }
            .gr_custom_review_1603564919 {
                padding: 10px;
            }
        </style>

      <div id="gr_custom_widget_1603564919">
          <div class="gr_custom_container_1603564919">
    <h2 class="gr_custom_header_1603564919">
    <a style="text-decoration: none;" rel="nofollow" href="https://www.goodreads.com/review/list/96218233-supriya-srivatsa?shelf=read&amp;utm_medium=api&amp;utm_source=custom_widget">Recent Reads</a>
    </h2>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="This Is Going to Hurt: Secret Diaries of a Junior Doctor" rel="nofollow" href="https://www.goodreads.com/review/show/3495886281?utm_medium=api&amp;utm_source=custom_widget"><img alt="This Is Going to Hurt: Secret Diaries of a Junior Doctor" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495900231l/35235302._SX98_SY160_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="it was amazing"><img alt="it was amazing" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3495886281?utm_medium=api&amp;utm_source=custom_widget">This Is Going to Hurt: Secret Diaries of a Junior Doctor</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/17160706.Adam_Kay">Adam Kay</a>
          </div>
          <div class="gr_custom_review_1603564919">
            This book is hilarious. It had me smiling and laughing, shaking my head at the ridiculousness of some patient tales; but only until the end of the book, when it does hurt. It's sad and touching. It moves me that ultimately, it's not all ...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="Milk Teeth" rel="nofollow" href="https://www.goodreads.com/review/show/3494017687?utm_medium=api&amp;utm_source=custom_widget"><img alt="Milk Teeth" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542868867l/42925495._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3494017687?utm_medium=api&amp;utm_source=custom_widget">Milk Teeth</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/18641102.Amrita_Mahale">Amrita Mahale</a>
          </div>
          <div class="gr_custom_review_1603564919">
            The book is so beautifully Indian, beautifully Mumbai! &lt;3 Amrita Mahale's observation of some thoroughly Indian ways of life, her thoughts on the mundane, and how she weaves these into words that paint an image, words that melt and scrun...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="Kafka on the Shore" rel="nofollow" href="https://www.goodreads.com/review/show/3476950491?utm_medium=api&amp;utm_source=custom_widget"><img alt="Kafka on the Shore" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429638085l/4929._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3476950491?utm_medium=api&amp;utm_source=custom_widget">Kafka on the Shore</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/3354.Haruki_Murakami">Haruki Murakami</a>
          </div>
          <div class="gr_custom_review_1603564919">
            &quot;Kafka on the Shore&quot; is like a dream - it is surreal at best, very weird on the flip side. You know how in a dream, sometimes things make sense and suddenly you are in a random castle plotting an escape to Mars with a person you barely k...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="The Handmaid's Tale (The Handmaid's Tale, #1)" rel="nofollow" href="https://www.goodreads.com/review/show/3460882698?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Handmaid's Tale" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578028274l/38447._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3460882698?utm_medium=api&amp;utm_source=custom_widget">The Handmaid's Tale</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/3472.Margaret_Atwood">Margaret Atwood</a>
          </div>
          <div class="gr_custom_review_1603564919">
            This isn't an easy book, to read or to review. The book is intense. By the end of it, I felt tired, emotionally drained; but also loved reading dystopia detailed to a t, so much that this world seems scarily real. I enjoyed the brutally ...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="The Silent Patient" rel="nofollow" href="https://www.goodreads.com/review/show/3459173705?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Silent Patient" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582759969l/40097951._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3459173705?utm_medium=api&amp;utm_source=custom_widget">The Silent Patient</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/17621440.Alex_Michaelides">Alex Michaelides</a>
          </div>
          <div class="gr_custom_review_1603564919">
            The book was so regular, ordinary - until the last few pages that changed everything. The twist had me gaping, loved it! The characters seemed a little underdeveloped, and almost the first hundred pages of the book fall flat; but the twi...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="A Man Called Ove" rel="nofollow" href="https://www.goodreads.com/review/show/3458216690?utm_medium=api&amp;utm_source=custom_widget"><img alt="A Man Called Ove" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="it was amazing"><img alt="it was amazing" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3458216690?utm_medium=api&amp;utm_source=custom_widget">A Man Called Ove</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/6485178.Fredrik_Backman">Fredrik Backman</a>
          </div>
          <div class="gr_custom_review_1603564919">
            A Man Called Ove is adorable! I *love* the character. There are very few books that can make you laugh out loud, as well as get you all teary eyed; this was one of those. It is an ordinary story, narrated so extraordinarily. I grew fond ...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="Dark Matter" rel="nofollow" href="https://www.goodreads.com/review/show/3458167417?utm_medium=api&amp;utm_source=custom_widget"><img alt="Dark Matter" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680l/27833670._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="liked it"><img alt="liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3458167417?utm_medium=api&amp;utm_source=custom_widget">Dark Matter</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/442240.Blake_Crouch">Blake Crouch</a>
          </div>
          <div class="gr_custom_review_1603564919">
            I picked up this book expecting a thriller and science fiction ridden with physics heavy concepts. While it did not entirely fail to deliver on both of these expectations, to me, the book was more a &quot;love story in a science fiction&quot; set ...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="Bad Blood: Secrets and Lies in a Silicon Valley Startup" rel="nofollow" href="https://www.goodreads.com/review/show/3342943185?utm_medium=api&amp;utm_source=custom_widget"><img alt="Bad Blood: Secrets and Lies in a Silicon Valley Startup" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556268702l/37976541._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3342943185?utm_medium=api&amp;utm_source=custom_widget">Bad Blood: Secrets and Lies in a Silicon Valley Startup</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/17575761.John_Carreyrou">John Carreyrou</a>
          </div>
          <div class="gr_custom_review_1603564919">
            A non fiction that reads like a thriller! Scary and unbelievable the amount of fraud Theranos has pulled off.
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="River of Flesh and Other Stories: The Prostituted Woman in Indian Short Fiction" rel="nofollow" href="https://www.goodreads.com/review/show/3341522255?utm_medium=api&amp;utm_source=custom_widget"><img alt="River of Flesh and Other Stories: The Prostituted Woman in Indian Short Fiction" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456252714l/29281096._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3341522255?utm_medium=api&amp;utm_source=custom_widget">River of Flesh and Other Stories: The Prostituted Woman in Indian Short Fiction</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/7799929.Ruchira_Gupta">Ruchira Gupta</a>
          </div>
          <div class="gr_custom_review_1603564919">
            Underrated, very well written set of short stories! The stories are delicate, yet bold; nuanced, yet undaunted. Even in the shortest of short stories, there's an instant connection with the protagonist. Some stories end in enigma, some e...
          </div>
      </div>
      <div class="gr_custom_each_container_1603564919">
          <div class="gr_custom_book_container_1603564919">
            <a title="Train to Pakistan" rel="nofollow" href="https://www.goodreads.com/review/show/3341511594?utm_medium=api&amp;utm_source=custom_widget"><img alt="Train to Pakistan" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599410785l/785454._SX98_.jpg" /></a>
          </div>
          <div class="gr_custom_rating_1603564919">
            <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://www.goodreads.com/images/layout/gr_red_star_inactive.png" /></span>
          </div>
          <div class="gr_custom_title_1603564919">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/3341511594?utm_medium=api&amp;utm_source=custom_widget">Train to Pakistan</a>
          </div>
          <div class="gr_custom_author_1603564919">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/63189.Khushwant_Singh">Khushwant Singh</a>
          </div>
          <div class="gr_custom_review_1603564919">
            I was keen on reading a book set in the times of partition and picked up this. The book is very well written and well portrays the partition tribulations. The characters are carefully described, adding a level of depth and personality to...
          </div>
      </div>
  <br style="clear: both"/>
  <center>
    <a rel="nofollow" href="https://www.goodreads.com/"><img alt="goodreads.com" style="border:0" src="https://www.goodreads.com/images/widget/widget_logo.gif" /></a>
  </center>
  <noscript>
    Share <a rel="nofollow" href="https://www.goodreads.com/">book reviews</a> and ratings with Supriya, and even join a <a rel="nofollow" href="https://www.goodreads.com/group">book club</a> on Goodreads.
  </noscript>
  </div>

      </div>
      <script src="https://www.goodreads.com/review/custom_widget/96218233.Recent%20Reads?cover_position=left&cover_size=medium&num_books=10&order=d&shelf=read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=none&widget_id=1603564919&widget_text_color=000000&widget_title_size=small&widget_width=full" type="text/javascript" charset="utf-8"></script>
    </div>

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