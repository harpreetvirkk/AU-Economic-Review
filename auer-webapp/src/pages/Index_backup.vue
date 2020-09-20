<template>
  <q-page>
   <div class="row justify-center">
     <div class="col-12 col-md-9">
       <div class="q-pa-md" style="margin-top:30px; margin-bottom:30px">
         <q-carousel
            animated
            v-model="slide"
            swipeable
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            style="max-height=600px; max-width=100%"
          >
            <q-carousel-slide :name="1" img-src="https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
              <div class="absolute-bottom custom-caption">
                  <div class="text-h5">The Caste-Cursed Labour Economy</div>
                  <div class="text-subtitle1">How we are losing out and why we need Affirmative Action</div>
                  <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                  <q-btn color="white" style="color: #ffffff;" label="Read More!" to="/article2"/>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" img-src="https://oey9s2z6itv32c8so28s4m1b-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Koronavirus-on-aiheuttanut-shokin-maailmantaloudessa-2.jpg">
            <div class="absolute-bottom custom-caption">
                <div class="text-h5">What is in store for Globalisation post Covid-19?</div>
                <div class="text-subtitle1">Analysing the Idea of Reverse Globalisation - Will it be effective?</div>
                <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                <q-btn color="white" style="color: #000000" label="Read More!" to="/article1"/>
              </div>
            </q-carousel-slide>
          </q-carousel>
       </div>
     </div>
   </div>
    <div class="row justify-center" style="padding: 30px 30px 30px 30px">
          <div class="col-12 col-md-6">
            <div class="row justify-center">
            <div class="col-md-10" style="padding: 0px 0px 30px 0px">
              <div class="text-h4">
                <b style="border-bottom-width: 2px;
                          border-bottom-style: solid;
                          border-bottom-color: rgb(226, 26, 44);">RECENT</b> ARTICLES
              </div>
              <br />
              <br />
              <q-btn :ripple="false" flat no-caps padding="none" align="left" to='/article2'>
                <div class="row justify-left" style="box-shadow: 5px 5px 3px grey;">
                <div class="col-12 col-md-4">
                  <img src="https://www.epw.in/system/files/styles/di_list/private/di_images/2020/08/19/Featured.png?itok=kgQQxKei" width="100%" height="100%" alt="">
                </div>
                <div class="col-12 col-md-8">
                    <div class="row justify-left" style="padding:20px 20px 20px 20px; text-align:left">
                      <div class="text-h5">The Caste - Cursed Labour Economy</div>
                      <div class="text-subtitle1">How we are losing out and why we need Affirmative Action</div>
                      <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                    </div>
                </div>
              </div>
              </q-btn>
              <br />
              <br />
              <q-btn :ripple="false" flat no-caps padding="none" align="left" to='/article1'>
              <div class="row justify-left" style="box-shadow: 5px 5px 3px grey;">
                <div class="col-12 col-md-4" >
                  <img src="https://www.epw.in/system/files/styles/di_list/private/di_images/2020/08/6/Featured.png?itok=H7vad-nm" width="100%" height="100%" alt="">
                </div>
                <div class="col-12 col-md-8">
                  <div class="row justify-left" style="padding:20px 20px 20px 20px; text-align:left">
                      <div class="text-h5">What is in store for Globalisation post Covid-19?</div>
                      <div class="text-subtitle1">Analysing the Idea of Reverse Globalisation - Will it be effective?</div>
                      <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                    </div>
                </div>
              </div>
              </q-btn>
              <br />
              <br />
              <q-btn :ripple="false" flat no-caps padding="none" align="left" to='/article2'>
              <div class="row justify-left" style="box-shadow: 5px 5px 3px grey;">
                <div class="col-12 col-md-4">
                  <img src="https://www.epw.in/system/files/styles/di_list/private/di_images/2020/08/10/livesofwasteSM.png?itok=hHS7PA9f" width="100%" height="100%" alt="">
                </div>
                <div class="col-12 col-md-8">
                  <div class="row justify-left" style="padding:20px 20px 20px 20px; text-align:left">
                      <div class="text-h5">The Caste-Cursed Labour Economy</div>
                      <div class="text-subtitle1">How we are losing out and why we need Affirmative Action</div>
                      <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                    </div>
                </div>
              </div>
              </q-btn>
            </div>
            </div>
            <div class="row justify-center">
              <div class="col-md-10" style="padding: 0px 0px 10px 0px">
                <div class="text-h4">
                  <b style="border-bottom-width: 2px;
                            border-bottom-style: solid;
                            border-bottom-color: rgb(226, 26, 44);">MUST</b> READ
                </div>
                <br />
                <br />
                <q-btn :ripple="false" flat no-caps padding="none" align="left" to='/article1'>
              <div class="row justify-left" style="box-shadow: 5px 5px 3px grey;">
                <div class="col-12 col-md-4">
                  <img src="https://www.epw.in/system/files/styles/di_list/private/di_images/2020/08/19/Featured.png?itok=kgQQxKei" width="100%" height="100%" alt="">
                </div>
                <div class="col-12 col-md-8">
                  <div class="row justify-left" style="padding:20px 20px 20px 20px; text-align:left">
                      <div class="text-h5">What is in store for Globalisation post Covid-19?</div>
                      <div class="text-subtitle1">Analysing the Idea of Reverse Globalisation - Will it be effective?</div>
                      <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                    </div>
                </div>
              </div>
              </q-btn>
              <br />
              <br />
              <q-btn :ripple="false" flat no-caps padding="none" align="left" to='/article2'>
              <div class="row justify-left" style="box-shadow: 5px 5px 3px grey;">
                <div class="col-12 col-md-4">
                  <img src="https://www.epw.in/system/files/styles/di_list/private/di_images/2020/08/6/Featured.png?itok=H7vad-nm" width="100%" height="100%" alt="">
                </div>
                <div class="col-12 col-md-8">
                  <div class="row justify-left" style="padding:20px 20px 20px 20px; text-align:left">
                      <div class="text-h5">The Caste-Cursed Labour Economy</div>
                      <div class="text-subtitle1">How we are losing out and why we need Affirmative Action</div>
                      <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                    </div>
                </div>
              </div>
              </q-btn>
              <br />
              <br />
              <q-btn :ripple="false" flat no-caps padding="none" align="left" to='/article1'>
              <div class="row justify-left" style="box-shadow: 5px 5px 3px grey;">
                <div class="col-12 col-md-4">
                  <img src="https://www.epw.in/system/files/styles/di_list/private/di_images/2020/08/10/livesofwasteSM.png?itok=hHS7PA9f" width="100%" height="100%" alt="">
                </div>
                <div class="col-12 col-md-8">
                  <div class="row justify-left" style="padding:20px 20px 20px 20px; text-align:left">
                      <div class="text-h5">What is in store for Globalisation post Covid-19?</div>
                      <div class="text-subtitle1">Analysing the Idea of Reverse Globalisation - Will it be effective?</div>
                      <div class="text-subtitle2">by Hrithik Ganju | July 6th, 2020</div>
                    </div>
                </div>
              </div>
              </q-btn>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="row justify-center">
              <div class="col-md-10" >
                <div class="row justify-center">
            <div class="col-md-10" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 10px 10px 30px 10px;">
            <a class="twitter-timeline" href="https://twitter.com/economics?ref_src=twsrc%5Etfw">Tweets by economics</a>
            </div>
            </div>
              </div>
            </div>
          </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex'
}
</script>
<script>
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>

<!--<style lang="sass" scoped>
.custom-caption
  text-align: left
  padding: 12px
  color: white
  max-width: 30%
  height: 500px
  backdrop-filter: blur(5px)
  background-color: rgba(0, 0, 0, 0.4)
  word-wrap: break-word
</style>-->
<style lang="sass" scoped>
.custom-caption
  text-align: left
  padding: 12px
  backdrop-filter: blur(5px)
  color: white
  background-color: rgba(0, 0, 0, .4)
</style>
