<template>
  <q-layout view="hHh lpR fFf" class="shadow-2 rounded-borders" style="padding:0px 1px 0px 1px">
    <q-ajax-bar
      ref="bar"
      position="top"
      color="#AF232D"
      size="2px"
      skip-hijack
    />
    <q-header elevated reveal bordered class="bg-white text-primary" style="text-align:center;">
        <q-toolbar style="margin-left:auto; margin-right:auto; max-width:80%; min-height:20px; padding-top:10px">
          <q-toolbar-title class="text-center headerimg" style='font-family: "Playfair Display", serif;font-size: 4.5vw; color: #840000; font-weight:800; letter-spacing:0px;'>
            AU | Economic Review
          </q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="justify-center" style="margin-left:auto; margin-right:auto; min-height:20px; padding-bottom:25px">
          <q-toolbar-title class="text-center headerimg" style='font-size: 0.85vw; color: white; letter-spacing:0.2vw;width:auto;'>
            <span style="margin: auto; padding: 15px 40px 10px 40px; background-color:#333; text-transform:uppercase">Ashoka University's Premier Student Run Economics Newspaper</span>
          </q-toolbar-title>
        </q-toolbar>
        <q-tabs dense align="center" swipeable v-model="tab" inline-label mobile-arrows class='text-black' style="font-family: 'Georgia', serif;" >
          <q-route-tab  @click="trigger" to="/" style="padding: 0px 60px 0px 60px; font-size:11px">HOME</q-route-tab>
          <q-route-tab  @click="trigger" to="/articles" style="padding: 0px 60px 0px 60px; font-size:11px">ARTICLES</q-route-tab>
          <q-route-tab  @click="trigger" to="/submit" style="padding: 0px 60px 0px 60px; font-size:11px">SUBMIT</q-route-tab>
          <q-route-tab  @click="trigger" to="/joinUs" style="padding: 0px 60px 0px 60px;font-size:11px">JOIN US</q-route-tab>
          <q-route-tab  @click="trigger" to="/about" style="padding: 0px 60px 0px 60px;font-size:11px">ABOUT</q-route-tab>
          </q-tabs>
    </q-header>
    <!-- <q-header elevated reveal reveal-offset=100 class="bg-white text-primary" style="
                          border-bottom-style: solid;
                          border-bottom-width:0.7px;
                          border-bottom-color: grey;
                          overflow: visible;
                          ">
      <q-toolbar>
        <div style="overflow: visible;width:100%;">
            <img class='headerimg' src="https://img.techpowerup.org/200910/screenshot-2020-09-06-at-9-58-27-pm.png">
        </div>
      </q-toolbar>
      <q-tabs dense narrow-indicator align="justify" no-caps swipeable v-model="tab" inline-label mobile-arrows class='text-black' style="font-family: 'Georgia', serif; margin:0px 80px 0px 80px" >
        <q-route-tab  @click="trigger" to="/" label="HOME" />
        <q-route-tab  @click="trigger" to="/articles" label="ARTICLES"/>
        <q-route-tab  @click="trigger" to="/submit" label="SUBMIT"/>
        <q-route-tab  @click="trigger" to="/joinUs" label="JOIN US"/>
        <q-route-tab  @click="trigger" to="/about" label="ABOUT"/>
      </q-tabs>
    </q-header> -->
    <!-- <q-header reveal class="bg-white text-primary" bordered style='font-family: "Georgia", serif;;' bold>
        <q-toolbar style="border-bottom-style: solid;
                          border-bottom-width:0.7px;
                          border-bottom-color: grey;
                          border-top-style: solid;
                          border-top-width:0.7px;
                          border-top-color: grey;
                          overflow: visible;
                          width:100%;">
          <q-toolbar-title class="text-center headerimg" style='font-size:5vw; color: #840000; padding-bottom:5px; padding-top:20px; font-weight:bold; letter-spacing:0px'>
            AU | Economic Review
          <p style='font-size:1.5vw; color:grey; text-transform: capitalize; font-family: "Bebas Neue";font-weight:normal; letter-spacing: 4px;' >Ashoka University's Premier Student Run Economics Newspaper</p>
          </q-toolbar-title>
        </q-toolbar>
        <q-tabs align="center" v-model="tab" inline-label>
        <q-route-tab  @click="trigger" to="/" label="HOME" style="padding: 0px 40px 0px 40px"/>
        <q-route-tab  @click="trigger" to="/articles_home" label="ARTICLES"  style="padding: 0px 40px 0px 40px"/>
        <q-route-tab  @click="trigger" to="/submit_home" label="SUBMIT"  style="padding: 0px 40px 0px 40px" />
        <q-route-tab  @click="trigger" to="/join_us" label="JOIN US" style="padding: 0px 40px 0px 40px" />
        <q-route-tab  @click="trigger" to="/about_home" label="ABOUT"  style="padding: 0px 40px 0px 40px" />
      </q-tabs>
    </q-header> -->
         <!-- <q-header reveal
        reveal-offset: 50
        class="bg-white text-primary" style="
                          border-bottom-width: 0.5px;
                          border-bottom-style: solid;
                          border-bottom-color: #333;
                          "> -->
        <!-- <q-toolbar>
        <div>
            <img class='headerimg' src="https://img.techpowerup.org/200906/screenshot-2020-09-06-at-5-15-25-pm.png">
        </div>
        </q-toolbar> -->
        <!-- <q-toolbar style="padding: 60px 0px 0px 0px">
          <q-toolbar-title class="text-center q-gutter-sm" style="padding:0px 0px 20px 0px;
                          border-bottom-width: 0.5px;
                          border-bottom-style: solid;
                          border-bottom-color: #333;
                          border-top-width: 0.5px;
                          border-top-style: solid;
                          border-top-color: #333;
                          ">
            <p style='font-size:4vw; color: #840000; font-family: "Playfair Display", serif; letter-spacing:-1px; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; display:inline-block; margin-bottom:0px' >
              AU | ECONOMIC REVIEW
            </p>
            <p><span style='padding: 0px 4px 0px 4px; text-transform:uppercase; font-size: 0.9vw; color:white; background-color:#333; font-weight:200; letter-spacing: 0.2rem; font-family: "Martel", serif; vertical-align:center' >Ashoka University's Premier Student Run Economics Newspaper</span></p>
          </q-toolbar-title>
        </q-toolbar> -->
        <!-- <q-toolbar style="padding: 60px 0px 0px 0px">
        <q-toolbar-title class="text-center q-gutter-sm" style="padding:0px 0px 20px 0px;
                          border-bottom-width: 0.5px;
                          border-bottom-style: solid;
                          border-bottom-color: #333;
                          border-top-width: 0.5px;
                          border-top-style: solid;
                          border-top-color: #333;
                          "> -->
          <!-- <div>
            <img class='headerimg' src="https://img.techpowerup.org/200906/screenshot-2020-09-06-at-5-15-25-pm.png">
          </div> -->
        <!-- </q-toolbar-title>
        </q-toolbar> -->
        <!-- <q-tabs align="center" no-caps v-model="tab" inline-label style="font-family: 'Martel', serif;">
        <q-route-tab  @click="trigger" to="/" label="Home" icon="fas fa-home" style="padding: 0px 40px 0px 40px"/>
        <q-route-tab  @click="trigger" to="/articles_home" label="Articles" icon="fas fa-newspaper" style="padding: 0px 40px 0px 40px"/>
        <q-route-tab  @click="trigger" to="/submit_home" label="Submit" icon="fas fa-upload" style="padding: 0px 40px 0px 40px" />
        <q-route-tab  @click="trigger" to="/join_us" label="Join Us" icon="fas fa-hand-point-up" style="padding: 0px 40px 0px 40px" />
        <q-route-tab  @click="trigger" to="/about_home" label="About Us" icon="fas fa-address-card" style="padding: 0px 40px 0px 40px" />
      </q-tabs>
    </q-header> -->
    <q-page-container>
      <router-view />
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="fas fa-arrow-up" style='color: #840000'/>
        </q-page-scroller>
            <!-- SUBMIT -->
    <div class="row justify-center" style="background-color: #840000; padding: 0px 0px 20px 0px; max-width:100%">
      <div class="col-6">
        <div class="row justify-center">
        <p style=" font-size:26px; color: #ffffff; font-family: 'Bebas Neue'; padding: 20px 20px 0px 20px; text-align:center"> SUBSCRIBE TO OUR NEWSLETTER! </p>
      </div>
      <div class="row justify-center">
        <!-- <div style="max-width:80%;">
          <q-btn>Subscribe</q-btn>
        </div> -->
        <div class="q-pa-md q-gutter-sm">
               <q-btn label="Subscribe" size="18px" class="q-px-xl q-py-xs" color="white" text-color="black" @click="toolbar = true" />
          <q-dialog v-model="toolbar">
                <q-card style="background-color:#840000; height:350px">
                  <q-toolbar>
                     <q-btn flat round dense icon="close" v-close-popup />
                  </q-toolbar>
                  <q-card-section>
                    <div class="powr-subscription-signup-form" id="0c5d9b80_1600374172"></div>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
      </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="row justify-center" style="background-color: #000000; padding: 0px 0px 0px 0px; max-width:100%">
      <div class="col-12 col-md-3" style="padding: 10px 10px 0px 10px">
        <div class="text-h6" style="color:#ffffff; font-size:15px">
                <b style="border-bottom-width: 2px;
                          border-bottom-style: solid;
                          border-bottom-color: #ffffff;
                          ">ABOUT</b> US
            </div>
            <p class="text-weight-light" style="color:#ffffff;padding: 10px 10px 0px 10px;">
              Ashoka University Economic Review (AUER) is a premiere peer-reviewed Economics publication run by the student body of Ashoka University in India.
            </p>
      </div>
      <div class="col-12 col-md-3" style="padding: 10px 10px 0px 10px">
        <div class="text-h6" style="color:#ffffff; font-size:15px">
                <b style="border-bottom-width: 2px;
                          border-bottom-style: solid;
                          border-bottom-color: #ffffff;
                          ">CONTACT</b> US
            </div>
            <p class="text-weight-light" style="color:#ffffff;padding: 10px 10px 0px 10px;">
              To connect with us regarding any queries, kindly email us at auer@ashoka.edu.in. We are also available on various social media platforms where you can follow/message us.
            </p>
      </div>
      <div class="col-12 col-md-3" style="padding: 10px 10px 0px 10px">
        <div class="text-h6" style="color:#ffffff; font-size:15px">
                <b style="border-bottom-width: 2px;
                          border-bottom-style: solid;
                          border-bottom-color: #ffffff;
                          ">SUBMIT</b> TO US
        </div>
            <p class="text-weight-light" style="color:#ffffff;padding: 10px 10px 0px 10px;">
              Submissions in the form of articles, notes, op-eds, comments or book reviews on a host of emerging economic issues are accepted. Kindly refer to the submission guidelines for more information.
            </p>
      </div>
    </div>
    <div class="row justify-end" style="color: white; background-color: #000000; width:100%; text-align: right">
      <div style="padding: 0px 20px 0px 20px; font-family: 'Georgia', serif;">
        <p style="color:#D3D3D3; font-size:8px">Copyright © 2020 <a class="cpy-url" style="font-weight:bold" href="#">Ashoka University Economic Review.</a> All Rights Reserved.</p>
      </div>
    </div>
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
        <q-tabs dense inline-label no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
        <a class='icon-ref' target="_blank" href="mailto:auer@ashoka.edu.in"><i class="fas fa-envelope" style="padding: 8px 40px 8px 40px;"></i></a>
        <a class='icon-ref' target="_blank" href="https://www.instagram.com/aueconreview/"><i class="fab fa-instagram" style="padding: 8px 40px 8px 40px;"></i></a>
        <a class='icon-ref' target="_blank" href="https://twitter.com/AUEconReview"><i class="fab fa-twitter" style="padding: 8px 40px 8px 40px;"></i></a>
        <a class='icon-ref' target="_blank" href="https://www.linkedin.com/company/ashoka-university-economic-review/about/"><i class="fab fa-linkedin" style="padding: 8px 40px 8px 40px;"></i></a>
        <a class='icon-ref' target="_blank" href="https://www.facebook.com/Ashoka-University-Economic-Review-118154173366449"><i class="fab fa-facebook" style="padding: 8px 40px 8px 40px;"></i></a>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<style>
.cpy-url {
  color: #D3D3D3;
  background-color: transparent;
  text-decoration: none;
}

.cpy-url:hover {
  color: white;
  background-color: transparent;
}
</style>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.headerimg {
  display: block;
}
</style>
<script>
export default {
  data () {
    return {
      toolbar: false
    }
  },
  methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, 5000)
    }
  }
}
</script>
<style>
.icon-ref {
  color: grey;
  background-color: transparent;
  text-decoration: none;
}
.icon-ref:hover {
  color: #840000;
  background-color: transparent;
}
.head-ref:hover {
  color: #840000;
  background-color: transparent;
}
</style>
