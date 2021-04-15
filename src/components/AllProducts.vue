<template>
  <div class="allProducts">
    <!-- HEADER -->
    <header class="l-header" id="header">
      <nav class="nav bd-grid">
        <div
          class="nav__toggle"
          id="nav-toggle"
          @click="showMenu('nav-toggle', 'nav-menu')"
        >
          <i class="fas fa-th"></i>
        </div>

        <router-link to="/" class="nav__logo">Roby</router-link>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/">Features</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/">Women</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/">New</router-link>
            </li>
            <li class="nav__item">
              <router-link to="#shop" class="nav__link active"
                >Shop</router-link
              >
            </li>
          </ul>
        </div>

        <div class="nav__shop">
          <i class="fas fa-shopping-basket"></i>
        </div>
      </nav>
    </header>

    <main class="l-main">
      <!-- ALL PRODUCTS -->
      <section class="featured section" id="shop">
        <h2 class="section-title">All Products</h2>

        <div class="featured__container bd-grid">
          <article class="sneaker">
            <img src="featured1.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Jordan</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="featured2.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Free RN</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="new2.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Jordan</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="new3.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Jordan</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="new4.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Jordan</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>

          <article class="sneaker">
            <img src="new5.png" alt="" class="sneaker__img" />
            <span class="sneaker__name">Nike Jordan</span>
            <span class="sneaker__price">$149.99</span>
            <router-link to="" class="button-light"
              >Add to Cart <i class="fas fa-arrow-right button-icon"></i
            ></router-link>
          </article>
        </div>

        <div class="sneaker__pages bd-grid">
          <div>
            <span class="sneaker__pag">1</span>
            <span class="sneaker__pag">2</span>
            <span class="sneaker__pag">3</span>
            <span class="sneaker__pag">&#8594;</span>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
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
            <li>
              <router-link to="#home" class="footer__link">Home</router-link>
            </li>
            <li>
              <router-link to="#featured" class="footer__link"
                >Featured</router-link
              >
            </li>
            <li>
              <router-link to="#women" class="footer__link">Women</router-link>
            </li>
            <li>
              <router-link to="#new" class="footer__link">New</router-link>
            </li>
          </ul>
        </div>

        <div class="footer__box">
          <h3 class="footer__title">SUPPORT</h3>
          <ul>
            <li>
              <router-link to="#" class="footer__link"
                >Product Help</router-link
              >
            </li>
            <li>
              <router-link to="#" class="footer__link"
                >Customer Care</router-link
              >
            </li>
            <li>
              <router-link to="#" class="footer__link"
                >Authorized service</router-link
              >
            </li>
          </ul>
        </div>

        <div class="footer__box">
          <router-link to="#" class="footer__social"
            ><i class="fab fa-facebook-f"></i
          ></router-link>
          <router-link to="#" class="footer__social"
            ><i class="fab fa-instagram"></i
          ></router-link>
          <router-link to="#" class="footer__social"
            ><i class="fab fa-twitter"></i
          ></router-link>
          <router-link to="#" class="footer__social"
            ><i class="fab fa-google"></i
          ></router-link>
        </div>
      </div>

      <p class="footer__copy">&#169; 2021 AR Furniture. All right reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Shop",
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
};
</script>

<style scoped>
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

.active::before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 45%;
  width: 4px;
  height: 4px;
  background-color: var(--dark-color);
  border-radius: 50%;
}
/* ====== END OF NAV ======== */

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

/* SHOP CSS */
.sneaker__pages {
  margin-top: var(--mb-6);
}

.sneaker__pag {
  padding: 0.5rem 1rem;
  border: 1px solid var(--dark-color);
  margin-right: 0.1rem;
}

.sneaker__pag:hover {
  background-color: var(--dark-color);
  color: var(--white-color);
}

/* FOOTER */
.footer__container {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.footer__box {
  margin-bottom: var(--mb-4);
}

.footer__title {
  font-size: var(--big-font-size);
}

.footer__link {
  display: block;
  width: max-content;
  margin-bottom: var(--mb-1);
}

.footer__social {
  font-size: 1.5rem;
  margin-right: 1.25rem;
}

.footer__copy {
  padding-top: 3rem;
  font-size: var(--smaller-font-size);
  color: var(--dark-color-light);
  text-align: center;
}

/* MEDIA QUERIES */
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

}
</style>