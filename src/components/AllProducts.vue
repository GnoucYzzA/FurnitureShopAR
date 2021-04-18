<template>
  <div class="allProducts">
    <NavBar/>
    <main class="l-main">
      
      <!-- ALL PRODUCTS -->
      <section class="featured section" id="shop" v-if="products">
        <h2 class="section-title">All Products</h2>
        <div class="featured__container bd-grid" >
          <article class="sneaker" v-for="product in products" :key="product.id">
            <!-- <img :src="product.image" alt="" class="sneaker__img" /> -->
            <iframe class="sneaker__img" :id="product.arID" :src="product.arURL" frameborder="0" width="100%" height="300px"></iframe>
            <span class="sneaker__name">{{product.name}}</span>
            <span class="sneaker__price">${{product.price}}</span>
            
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
    <Footer/>

  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import db from '@/firebase/init'
export default {
  name: "Shop",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return{
      products: [],
    }
  },
  beforeCreate(){
    
    db.collection('products').get()
    .then(snapshot =>{
      if(snapshot){
        snapshot.forEach(doc =>{
          // console.log(doc.id, "=>", doc.data());
          // let product = doc.data()
          // product.id = doc.id 
          this.products.push(doc.data()
            // id: product.id,
            // image: product.image,
            // description: product.description,
            // name: product.name,
            // price: product.price,
            // arURL: product.arURL,
            // arID: product.arID
          )
          
        })
      }
    })
  }
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



/* ====== END OF NAV ======== */

/* FEATURED */
.featured__container {
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.sneaker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  /* background-color: var(--dark-color-lighten); */
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
  width: 400px;
  /* margin-top: var(--mb-3);
  margin-bottom: var(--mb-6);
  transform: var(--rotate-img);
  filter: drop-shadow(0 12px 8px rgba(0, 0, 0, 0.2)); */
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