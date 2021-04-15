<template>
  <div class="Landing">
    <header class="l-header" id="header">
      <nav class="nav bd-grid">
        <div
          class="nav__toggle"
          id="nav-toggle"
          @click="showMenu('nav-toggle', 'nav-menu')"
        >
          <i class="fas fa-th"></i>
        </div>

        <a href="#" class="nav__logo">Roby</a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active">Home</a>
            </li>
            <li class="nav__item">
              <a href="#featured" class="nav__link">Features</a>
            </li>
            <li class="nav__item">
              <a href="#women" class="nav__link">Women</a>
            </li>
            <li class="nav__item">
              <a href="#new" class="nav__link">New</a>
            </li>
            <li class="nav__item">
              <router-link :to="{ name: 'Shop' }" class="nav__link">Shop</router-link>
            </li>
          </ul>
        </div>

        <div class="nav__shop">
          <i class="fas fa-shopping-basket"></i>
        </div>
      </nav>
    </header>
    <main class="l-main">
      <section class="home" id="home">
        <div class="home__container bd-grid">
          <div class="home__sneaker">
            <div class="home__shape"></div>
            <img src="imghome.png" alt="" class="home__img" />
            <!-- <iframe class="home__img" id={id} src={src} frameborder="0" width="100%" height="480"></iframe> -->
          </div>

          <div class="home__data">
            <span class="home__new">New in</span>
            <h1 class="home__title">
              YEEZY BOOST <br />
              SPLY - 350
            </h1>
            <p class="home__description">
              Explore the new collections of sneakers
            </p>
            <router-link to="#" class="button">Explore Now</router-link>
          </div>
        </div>
      </section>

      <!-- FEATURED-->
      <section class="featured section" id="featured">
        <h2 class="section-title">FEATURED</h2>

        <div class="featured__container bd-grid">
          <article class="sneaker">
            <div class="sneaker__sale">Sale</div>
            <img src="featured1.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Jordan</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <div class="sneaker__sale">Sale</div>
            <img src="featured2.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Free RN</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <div class="sneaker__sale">Sale</div>
            <img src="featured3.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Jordan</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>
        </div>
      </section>

      <!-- COLLECTION -->
      <section class="collection section">
        <div class="collection__container bd-grid">
          <div class="collection__card">
            <div class="collection__data">
              <h3 class="collection__name">Nike</h3>
              <p class="collection__description">New Collection 2021</p>
              <router-link to="#" class="button-light"
                >Buy now <i class="fas fa-arrow-right button-icon"></i
              ></router-link>
            </div>

            <img src="collection1.png" alt="" class="collection__img" />
          </div>

          <div class="collection__card">
            <div class="collection__data">
              <h3 class="collection__name">Addidas</h3>
              <p class="collection__description">New Collection 2021</p>
              <router-link to="#" class="button-light"
                >Buy now <i class="fas fa-arrow-right button-icon"></i
              ></router-link>
            </div>

            <img src="collection2.png" alt="" class="collection__img" />
          </div>
        </div>
      </section>

      <!-- WOMEN SNEAKER -->
      <section class="women section" id="women">
        <h2 class="section-title">WOMEN SNEAKERS</h2>
        <div class="women__container bd-grid">
          <article class="sneaker">
            <img src="women1.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Free TR</span>
            <span class="sneaker__price">$129.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="women2.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Free TR</span>
            <span class="sneaker__price">$129.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="women3.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike GS Pink</span>
            <span class="sneaker__price">$129.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="women4.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Get 5</span>
            <span class="sneaker__price">$129.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>
        </div>
      </section>

      <!-- OFFER -->
      <section class="offer section">
        <div class="offer__container bd-grid">
          <div class="offer__data" id="offer-text">
            <h3 class="offer__title">50% OFF</h3>
            <p class="offer__description">In Adidas Superstar sneakers</p>
            <router-link to="#" class="button">Shop Now</router-link>
          </div>

          <img src="offert.png" alt="" class="offer__img" id="offer-img" />
        </div>
      </section>

      <!-- NEW COLLECTION -->
      <section class="new section" id="new">
        <h2 class="section-title">NEW COLLECTION</h2>

        <div class="new__container bd-grid">
          <div class="new__mens">
            <img src="new1.png" alt="" class="new__mens-img" />
            <h3 class="new__title">Mens Shoes</h3>
            <span class="new__price">From $79.99</span>
            <router-link to="#" class="button-light"
              >View Collection <i class="fas fa-arrow-right button-icon"></i>
            </router-link>
          </div>
          <div class="new__sneaker">
            <div class="new__sneaker-card">
              <img src="new2.png" alt="" class="new__sneaker-img" />
              <div class="new__sneaker-overlay">
                <router-link to="#" class="button">Add to Cart</router-link>
              </div>
            </div>

            <div class="new__sneaker-card">
              <img src="new3.png" alt="" class="new__sneaker-img" />
              <div class="new__sneaker-overlay">
                <router-link to="#" class="button">Add to Cart</router-link>
              </div>
            </div>

            <div class="new__sneaker-card">
              <img src="new4.png" alt="" class="new__sneaker-img" />
              <div class="new__sneaker-overlay">
                <router-link to="#" class="button">Add to Cart</router-link>
              </div>
            </div>

            <div class="new__sneaker-card">
              <img src="new5.png" alt="" class="new__sneaker-img" />
              <div class="new__sneaker-overlay">
                <router-link to="#" class="button">Add to Cart</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- NEWSLETTER -->
      <section class="newsletter section">
        <div class="newsletter__container bd-grid">
          <div>
            <h3 class="newsletter__title">
              Subcribe And Get <br />
              10% OFF
            </h3>
            <p class="newsletter__description">
              Get 10% discount for all products
            </p>
          </div>

          <form action="" class="newsletter__subcribe">
            <input
              type="text"
              placeholder="@gmail.com"
              class="newsletter__input"
            />
            <router-link to="#" class="button">Subcribe</router-link>
          </form>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="footer section">
      <div class="footer__container bd-grid">
        <div class="footer__box">
          <h3 class="footer__title">Roby</h3>
          <p class="footer__description">New Collection of furnitures 2021.</p>
        </div>

        <div class="footer__box">
          <h3 class="footer__title">EXPLORE</h3>
          <ul>
              <li><router-link to="#home" class="footer__link">Home</router-link></li>
              <li><router-link to="#featured" class="footer__link">Featured</router-link></li>
              <li><router-link to="#women" class="footer__link">Women</router-link></li>
              <li><router-link to="#new" class="footer__link">New</router-link></li>
          </ul>
        </div>

        <div class="footer__box">
          <h3 class="footer__title">SUPPORT</h3>
          <ul>
              <li><router-link to="#" class="footer__link">Product Help</router-link></li>
              <li><router-link to="#" class="footer__link">Customer Care</router-link></li>
              <li><router-link to="#" class="footer__link">Authorized service</router-link></li>
          </ul>
        </div>

        <div class="footer__box">
            <router-link to="#" class="footer__social"><i class="fab fa-facebook-f"></i></router-link>
            <router-link to="#" class="footer__social"><i class="fab fa-instagram"></i></router-link>
            <router-link to="#" class="footer__social"><i class="fab fa-twitter"></i></router-link>
            <router-link to="#" class="footer__social"><i class="fab fa-google"></i></router-link>
        </div>
      </div>

      <p class="footer__copy">&#169; 2021 AR Furniture. All right reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    showMenu(toggleId, navId) {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
        });
      }
    },
  },
  created() {
    window.onscroll = () => {
      const nav = document.getElementById("header");
      if (this.scrollY >= 200) nav.classList.add("scroll-header");
      else nav.classList.remove("scroll-header");
    };
  },
};
</script>

<style scoped>
/* BASE */
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
  color: var(--dark-color);
  line-height: 1.6;
}

h1,
h2,
h3,
p,
ul {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}

.v-application a {
  text-decoration: none;
  color: var(--dark-color);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Class CSS */
.section {
  padding: 5rem 0 2rem;
}

.section-title {
  position: relative;
  font-size: var(--big-font-size);
  margin-bottom: var(--mb-4);
  text-align: center;
  letter-spacing: 0.1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  width: 56px;
  height: 0.18rem;
  top: -1rem;
  left: 0;
  right: 0;
  margin: auto;
  background-color: var(--dark-color);
}

/* LAYOUT */
.bd-grid {
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--dark-color-lighten);
}
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: var(--header-height);
    left: -100%;
    width: 70%;
    height: 100vh;
    padding: 2rem;
    background-color: var(--white-color);
    transition: 0.5s;
  }
}

.nav__item {
  margin-bottom: var(--mb-4);
}

.nav__logo {
  font-weight: var(--font-semi-bold);
}

.nav__toggle,
.nav__shop {
  font-size: 1.3rem;
  cursor: pointer;
}

.nav__toggle {
  margin-left: 5px;
}

.nav__shop {
  margin-right: 5px;
}

/* Show menu*/
.show {
  left: 0;
}
/*Active Link */
.active {
    position: relative;
}

.active::before{
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 45%;
    width: 4px;
    height: 4px;
    background-color: var(--dark-color);
    border-radius: 50%;
}
/*Change color header*/
.scroll-header {
  background-color: var(--white-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
/* HOME */
.home {
  background-color: var(--dark-color-lighten);
  overflow: hidden;
}

.home__container {
  height: calc(100vh - var(--header-height));
}

.home__sneaker {
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
}

.home__shape {
  width: 220px;
  height: 220px;
  margin-top: 3rem;
  background-color: var(--dark-color);
  border-radius: 50%;
}

.home__img {
  position: absolute;
  top: 4rem;
  max-width: initial;
  width: 275px;
  transform: var(--rotate-img);
}

.home__new {
  display: block;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: var(--mb-2);
}

.home__title {
  font-size: var(--bigger-font-size);
  margin-bottom: var(--mb-1);
}

.home__description {
  margin-bottom: var(--mb-6);
}

/* BUTTONS*/
.button {
  display: inline-block;
  background-color: var(--dark-color);
  color: var(--white-color) !important;
  padding: 1.125rem 2rem;
  font-weight: var(--font-medium);
  border-radius: 0.5rem;
  transition: 0.3s;
}

.button:hover {
  transform: translateY(-0.25rem);
}

.button-light {
  display: inline-flex;
  color: var(--dark-color);
  font-weight: var(--font-bold);
  align-items: center;
}

.button-icon {
  font-size: 1.25rem;
  margin-left: var(--mb-1);
  transition: 0.3s;
}

.button-light:hover .button-icon {
  transform: translateX(0.25rem);
}
/* FEATURED */
.featured__container {
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.sneaker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--dark-color-lighten);
  border-radius: 0.5rem;
  transition: 0.3s;
}

.sneaker__sale {
  position: absolute;
  left: 0.5rem;
  background-color: var(--dark-color);
  color: var(--white-color);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: var(--h2-font-size);
  transform: rotate(-90deg);
  letter-spacing: 0.1rem;
}

.sneaker__img {
  width: 220px;
  margin-top: var(--mb-3);
  margin-bottom: var(--mb-6);
  transform: var(--rotate-img);
  filter: drop-shadow(0 12px 8px rgba(0, 0, 0, 0.2));
}

.sneaker__name,
.sneaker__price {
  font-size: var(--h2-font-size);
  letter-spacing: 0.1rem;
  font-weight: var(--font-bold);
}

.sneaker__name {
  margin-bottom: var(--mb-1);
}

.sneaker__price {
  margin-bottom: var(--mb-4);
}

.sneaker:hover {
  transform: translateY(-2rem);
}

/* COLLECTION */
.collection__container {
  row-gap: 2rem;
  justify-content: center;
}

.collection__card {
  position: relative;
  display: flex;
  height: 328px;
  background-color: var(--dark-color-lighten);
  padding: 2rem;
  border-radius: 0.5rem;
  transition: 0.3s;
}

.collection__data {
  align-self: flex-end;
}

.collection__img {
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
}

.collection__name {
  font-size: var(--bigger-font-size);
  margin-bottom: 0.25rem;
}

.collection__description {
  margin-bottom: var(--mb-2);
}

.collection__card:hover {
  transform: translateY(-1rem);
}

.women__container {
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

/* OFFER */
.offer__container {
  grid-template-columns: 55% 45%;
  column-gap: 0;
  background-color: var(--dark-color-lighten);
  border-radius: 0.5rem;
  justify-content: center;
}

.offer__data {
  padding: 4rem 0 4rem 1.5rem;
}

.offer__title {
  font-size: var(--biggest-font-size);
  margin-bottom: 0.25rem;
}

.offer__description {
  margin-bottom: var(--mb-3);
}

.offer__img {
  width: 153px;
}

/* NEW COLLECTION */
.new__container {
  row-gap: 2rem;
}

.new__mens {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark-color-lighten);
  border-radius: 0.5rem;
  padding: 2rem;
}

.new__mens-img {
  width: 276px;
  margin-bottom: var(--mb-3);
}

.new__title {
  font-size: var(--bigger-font-size);
  margin-bottom: 0.25rem;
}

.new__price {
  display: block;
  margin-bottom: var(--mb-3);
}

.new__sneaker {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.new__sneaker-card {
  position: relative;
  padding: 3.5rem 1.5rem;
  background-color: var(--dark-color-lighten);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.new__sneaker-img {
  width: 220px;
}

.new__sneaker-overlay {
  position: absolute;
  left: 0;
  bottom: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(138, 138, 138, 0.3);
  transition: 0.3s;
}

.new__sneaker-card:hover .new__sneaker-overlay {
  bottom: 0;
}

/* NEWSLETTER */
.newsletter__container {
  background-color: var(--dark-color);
  color: var(--white-color);
  padding: 2rem 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
}

.newsletter__title {
  font-size: var(--bigger-font-size);
  margin-bottom: var(--mb-2);
}

.newsletter__description {
  margin-bottom: var(--mb-5);
}

.newsletter__subcribe {
  display: flex;
  column-gap: 0.5rem;
  background-color: var(--white-color);
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.newsletter__input {
  outline: none;
  border: none;
  width: 90%;
  font-size: var(--normal-font-size);
}

.newsletter__input::placeholder {
  color: var(--dark-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: var(--font-semi-bold);
}

/* FOOTER */
.footer__container{
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__box{
    margin-bottom: var(--mb-4);
}

.footer__title{
    font-size: var(--big-font-size);
}

.footer__link{
    display: block;
    width: max-content;
    margin-bottom: var(--mb-1);
}

.footer__social{
    font-size: 1.5rem;
    margin-right: 1.25rem;
}

.footer__copy{
    padding-top: 3rem;
    font-size: var(--smaller-font-size);
    color: var(--dark-color-light);
    text-align: center;
}

/* MEDIA QUERIES */
@media screen and (min-width: 576px){
    .collection__container{
        grid-template-columns: 415px;
    }

    .collection__img{
        width: 260px;
    }

    .offer__container{
        grid-template-columns: max-content max-content;
    }

    .offer__data{
        text-align: center;
    }

    .new__mens{
        align-items: center;
    }

}

@media screen and (min-width: 768px){
    body{
        margin: 0;
    }

    .section{
        padding: 7rem 0 3rem;
    }

    .section-title::after{
        width: 76px;
    }

    .nav{
        height: calc(var(--header-height) + 1.5rem);
    }
    .nav__menu{
        margin-left: auto;
    }
    .nav__list{
        display: flex;
    }
    .nav__item{
        margin-left: var(--mb-6);
        margin-bottom: 0;
    }
    .nav__toggle{
        display: none;
    }

    .home__container{
        height: 100vh;
        grid-template-columns: max-content max-content;
        justify-content: center;
        align-items: center;
    }

    .home__sneaker{
        order: 1;
    }
    .home__shape{
        width: 376px;
        height: 376px;
    }
    .home__img{
        width: 470px;
        top: 3.5rem;
        right: 0;
        left: -3rem;
    }

    .newsletter__container{
        grid-template-columns: max-content max-content;
        justify-content: center;
        align-items: center;
        padding: 4.5rem 2rem;
        column-gap: 3rem;
    }
    .newsletter__description{
        margin-bottom: 0;
    }
    .newsletter__subcribe{
        width: 360px;
        height: max-content;
    }
}

@media screen and (min-width: 1024px){
    .bd-grid{
        margin-left: auto;
        margin-right: auto;
    }

    .home__container{
        column-gap: 8rem;
    }

    .collection__container{
        grid-template-columns: repeat(2, 415px)
    }
    
    .new__container{
        grid-template-columns: max-content 1fr;
    }
    .new__mens{
        align-items: initial;
        justify-content: center;
        padding: 4rem 2rem;
    }
    .new__mens-img{
        margin-bottom: var(--mb-6);
    }
}
</style>