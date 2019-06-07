<template>
  <div id="navbar">
    <div id="logo">
      <h2>Some Website</h2>
    </div>
    <ul>
      <li v-for="link in links" :key="'navbarlink-'+link.name">
        <router-link :to="link.to">
          <b v-if="link.bold">{{ link.name }}</b>
          <span v-else>{{ link.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      links: [
        {
          name: 'About',
          to: '/about',
          bold: false
        }, {
          name: 'My Account',
          to: '/profile',
          bold: false
        }, {
          name: 'Type',
          to: '/type',
          bold: true
        }, {
          name: 'Read',
          to: '/read',
          bold: true
        }, {
          name: 'Write',
          to: '/write',
          bold: true
        }, {
          name: 'Home',
          to: '/',
          bold: true
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
navcolor = #F25D1C
hovercolor = #C9C9C9

#logo {
  float: left;
  color: navcolor;
  margin: 0;
  padding: 0;
}

#navbar {
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  border-bottom: 1px solid navcolor;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  margin-top: 0;
  float: right;
  padding: 20px 0px;
}

li a {
  color: navcolor;
  padding: 15px;
  text-decoration: none;
}
li a:hover {
  background-color: hovercolor;
}
</style>
