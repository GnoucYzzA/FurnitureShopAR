<template>
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
          <li><router-link to="#new" class="footer__link">New</router-link></li>
        </ul>
      </div>

      <div class="footer__box">
        <h3 class="footer__title">SUPPORT</h3>
        <ul>
          <li>
            <router-link to="#" class="footer__link">Product Help</router-link>
          </li>
          <li>
            <router-link to="#" class="footer__link">Customer Care</router-link>
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
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
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
  color: var(--dark-color) !important;
}
.bd-grid {
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}
/* END OF CSS NEED TO USE FOR ALL COMPONENTS */
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
@media screen and (min-width: 768px){
    body{
        margin: 0;
    }
}
@media screen and (min-width: 1024px){
    .bd-grid{
        margin-left: auto;
        margin-right: auto;
    }
}
</style>