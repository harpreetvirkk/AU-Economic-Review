<template>
<div class="row justify-center">
    <div class="col-md-8" >
        <div style='padding: 20px 20px 20px 20px;'>
            <div class="text-h4" style="font-size:20px; text-align:center; padding-bottom: 30px">
                <b style="border-bottom-width: 2px;
                          border-bottom-style: solid;
                          border-bottom-color: rgb(226, 26, 44);
                          ">WHY</b> JOIN US?
            </div>
            <div style="padding: 10px 0px 10px 0px">
                <p style="font-size: 15px; font-family: 'Rufina', serif">
                    As a member of the Ashoka University Economic Review (AUER), you will have the perfect opportunity to pursue economics beyond the theoretical models of the classroom. You will gain an in-depth experience in the process of economic research and will learn about relevant and emerging economic issues. More importantly, as part of AUER, you will connect with a friendly community of economics peers who are passionate about the subject and will provide you with invaluable academic and career advice. Additionally, you will have the opportunity to network with professionals in various fields, academicians and alumni through interviews. AUER aims to foster a learning environment, where staff members along with contributors can develop upon current literature in the field of Economics.
                </p>
                <p style="font-size: 15px; font-family: 'Rufina', serif">
                    Kindly note that there is no restriction for any Ashokan student to apply. We are happy to accept applications from students of all majors, batches and programmes at Ashoka University.
                </p>
                <p style="font-size: 15px; font-family: 'Rufina', serif">
                    Below, you can find descriptions for each of our offered roles. If we have job openings in any of the following, the link to apply can be found on the respective page below.
                </p>
            </div>
            <div style="padding: 10px 0px 10px 0px">
                <div class="row justify-center" style="max-width:100%; padding: 40px 20px 40px 20px">
                    <div class="text-h4" style="font-size:20px">
                        <b style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(226, 26, 44);
                                ">JOB</b> ROLES
                    </div>
                </div>
            </div>
            <div class="row justify-center">
                <div class="col-md-12">
                    <div class="row q-gutter-lg justify-center">
                    <div class="col-14 col-md-4">
                        <q-btn color="negative" @click="outreach = true" style="padding:10px 0px 10px 0px">
                            <img src="../assets/outreach.png" style="width:100%; height:auto;">
                        </q-btn>
                    </div>
                    <div class="col-14 col-md-4">
                        <q-btn color="negative" @click="peer = true" style="padding:10px 0px 10px 0px">
                            <img src="../assets/peer-rev.png" style="width:100%; height:auto;">
                        </q-btn>
                    </div>
                    <div class="col-14 col-md-4">
                        <q-btn color="negative" @click="web = true" style="padding:10px 0px 10px 0px">
                            <img src="../assets/web-dev.png" style="width:100%; height:auto;">
                        </q-btn>
                    </div>
                </div>

    <q-dialog v-model="outreach">
      <q-card style="background-color: #840000; color:white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Apply to be in the outreach team for AUER!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
            <ul>
                <li>Responsible for connecting with economics professors at various universities to solicit research paper submissions or blogs for AUER.</li>
                <li>Responsible for connecting with students and economics societies from various universities to call for submissions to the AUER.</li>
                <li>Manages the social media engagement for the review.</li>
            </ul>
            <br />
            <div style="text-align:center">
                <q-btn
                    disable
                    size="12px"
                    class="q-px-xl q-py-xs"
                    color="black"
                    label="Apply Now!"
                    />
            </div>
            <br />
            <b>Currently, we have no openings for this role.</b>
            <q-space />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="peer">
      <q-card style="background-color: #840000; color:white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Apply to be a peer reviewer for AUER!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
            <ul>
                <li>Reads and reviews submissions based on pre-decided metrics and prepares feedback for correspondence with the author until publication.</li>
                <li>Fact-checks and conducts background research for all submitted articles.</li>
                <li>Completes introductions/abstracts for the accepted papers.</li>
                <li>Conducts original research writes articles for the magazine and website with the help of other editors.</li>
                <li>Conducts interviews with professors and academicians.</li>
            </ul>
            <br />
            <div style="text-align:center">
                <q-btn
                    disable
                    size="12px"
                    class="q-px-xl q-py-xs"
                    color="black"
                    label="Apply Now!"
                    />
            </div>
            <br />
            <b>Currently, we have no openings for this role.</b>
            <q-space />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="web">
      <q-card style="background-color: #840000; color:white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Apply to be a web developer for AUER!</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
            <ul>
                <li>Continuously maintains the AUER website to ensure accessibility and accurate operation.</li>
                <li>Help with designing and implementing new and improved features to represent the growth of AUER.</li>
                <li>Knowledge of Quasar, Vue, and Javascript is recommended, but not required.</li>
            </ul>
            <br />
            <div style="text-align:center">
                <q-btn
                    disable
                    size="12px"
                    class="q-px-xl q-py-xs"
                    color="black"
                    label="Apply Now!"
                    />
            </div>
            <br />
            <b>Currently, we have no openings for this role.</b>
            <q-space />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
            </div>
            <!-- <div style="padding: 10px 0px 10px 0px">
                <div class="row justify-center" style="max-width:100%; padding: 40px 20px 40px 20px">
                    <div class="text-h4" style="font-size:26px">
                        <b style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(226, 26, 44);
                                ">JOB</b> ROLES
                    </div>
                </div>
                <div>
                    <div class="row justify-center q-gutter-xl" style="padding: 20px 0px 20px 0px">
                        <div class="col-12 col-md-5" style="border-width: 1px;
                                    border-style: solid;
                                    border-color: #e8e8e8;
                                    padding: 2px 2px 2px 2px;
                                    max-width:100%;">
                            <q-btn @click="dialog = true" >
                                <img src="#" style="width:100%; height:auto;">
                            </q-btn>

                            <q-dialog
                            v-model="dialog"
                            persistent
                            :maximized="maximizedToggle"
                            transition-show="slide-up"
                            transition-hide="slide-down"
                            >
                            <q-card class="text-white" style="background-color: #840000">
                                <q-bar>
                                <q-space />

                                <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                                    <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
                                </q-btn>
                                <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                                    <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
                                </q-btn>
                                <q-btn dense flat icon="close" v-close-popup>
                                    <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                                </q-btn>
                                </q-bar>

                                <q-card-section>
                                <div class="text-h6">OUTREACH</div>
                                </q-card-section>

                                <q-card-section class="q-pt-none">
                                <ul>
                                    <li>Responsible for connecting with economics professors at various universities to solicit research paper submissions or blogs for AUER.</li>
                                    <li>Responsible for connecting with students and economics societies from various universities to call for submissions to the AUER.</li>
                                    <li>Manages the social media engagement for the review.</li>
                                </ul>
                                <p>Currently, we have no openings for this role.</p>
                                </q-card-section>
                            </q-card>
                            </q-dialog>
                        </div>
                        <div class="col-12 col-md-5" style="border-width: 1px;
                                    border-style: solid;
                                    border-color: #e8e8e8;
                                    padding: 2px 2px 2px 2px;
                                    max-width:100%;">
                            <q-btn @click="dialog = true" >
                                <img src="#" style="width:100%; height:auto">
                            </q-btn>

                            <q-dialog
                            v-model="dialog"
                            persistent
                            :maximized="maximizedToggle"
                            transition-show="slide-up"
                            transition-hide="slide-down"
                            >
                            <q-card class="text-white" style="background-color: #840000">
                                <q-bar>
                                <q-space />

                                <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                                    <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
                                </q-btn>
                                <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                                    <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
                                </q-btn>
                                <q-btn dense flat icon="close" v-close-popup>
                                    <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                                </q-btn>
                                </q-bar>

                                <q-card-section>
                                <div class="text-h6">PEER REVIEW & RESEARCH</div>
                                </q-card-section>

                                <q-card-section class="q-pt-none">
                                <ul>
                                    <li>Reads and reviews submissions based on pre-decided metrics and prepares feedback for correspondence with the author until publication.</li>
                                    <li>Fact-checks and conducts background research for all submitted articles.</li>
                                    <li>Completes introductions/abstracts for the accepted papers.</li>
                                    <li>Conducts original research writes articles for the magazine and website with the help of other editors.</li>
                                    <li>Conducts interviews with professors and academicians.</li>
                                </ul>
                                <p>Currently, we have no openings for this role.</p>
                                </q-card-section>
                            </q-card>
                            </q-dialog>
                        </div>
                        <div class="col-12 col-md-5" style="border-width: 1px;
                                    border-style: solid;
                                    border-color: #e8e8e8;
                                    padding: 2px 2px 2px 2px;
                                    max-width:100%;">
                            <q-btn @click="dialog = true" >
                                <img src="#" style="width:100%; height:auto">
                            </q-btn>

                            <q-dialog
                            v-model="dialog"
                            persistent
                            :maximized="maximizedToggle"
                            transition-show="slide-up"
                            transition-hide="slide-down"
                            >
                            <q-card class="text-white" style="background-color: #840000">
                                <q-bar>
                                <q-space />

                                <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
                                    <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
                                </q-btn>
                                <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
                                    <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
                                </q-btn>
                                <q-btn dense flat icon="close" v-close-popup>
                                    <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                                </q-btn>
                                </q-bar>

                                <q-card-section>
                                <div class="text-h6">WEB DEVELOPMENT</div>
                                </q-card-section>

                                <q-card-section class="q-pt-none">
                                <ul>
                                    <li>Continuously maintains the AUER website to ensure accessibility and accurate operation.</li>
                                    <li>Help with designing and implementing new and improved features to represent the growth of AUER.</li>
                                    <li>Knowledge of Quasar, Vue, and Javascript is recommended.</li>
                                </ul>
                                <p>Currently, we have no openings for this role.</p>
                                </q-card-section>
                            </q-card>
                            </q-dialog>
                        </div>
                        <<div class="col-12 col-md-4" style="border-width: 1px;
                                    border-style: solid;
                                    border-color: #e8e8e8;
                                    padding: 10px 10px 30px 10px;
                                    max-width:100%;">
                            <div style="padding: 10px 10px 0px 10px;max-width:100%;">
                                Image
                                <q-btn :ripple="false" flat no-caps padding="none" align="left" to='/#'>
                                    <img src="https://econreview.berkeley.edu/wp-content/uploads/2020/08/7.png" style="width:100%; height:auto; padding-bottom:15px">
                                </q-btn>
                                Heading
                                <div style="border-bottom-width: 2px;
                                            border-bottom-style: solid;
                                            border-bottom-color: rgb(40, 40, 40);">
                                    <a class='title-url text-h5' href="/#" style="line-height:1.4; font-weight:700; font-family: 'Merriweather Sans', sans-serif;text-size-adjust:100%; cursor:pointer;  ">
                                    Pratap Bhanu Mehta
                                    </a>
                                </div>
                                Subheading
                                <div style="padding:10px 0px 0px 0px">
                                    <a class='subtitle-url text-subtitle1' href="/#" style="font-size:18px;text-size-adjust:100%; cursor:pointer;  ">
                                    How we are losing out and why we need Affirmative Action
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</div>
</template>
<style>
.col-md-8{
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: justify;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
<style>
.title-url {
  color: #000000;
  background-color: transparent;
  text-decoration: none;
}

.title-url:hover {
  color: #AF232D;
  background-color: transparent;
}
.subtitle-url {
  color: #000000;
  background-color: transparent;
  text-decoration: none;
}

.subtitle-url:hover {
  color: #AF232D;
  background-color: transparent;
}
</style>
<script>
export default {
  data () {
    return {
      outreach: false,
      peer: false,
      web: false
    }
  }
}
</script>
