<template>
    <q-page>
        <div class="row justify-center" style="max-width:100%; padding: 40px 20px 40px 20px">
            <div class="text-h5">
                <b style="border-bottom-width: 2px;
                          border-bottom-style: solid;
                          border-bottom-color: rgb(226, 26, 44);
                          ">AUER</b> Articles
            </div>
        </div>
        <div class="row justify-center q-gutter-md" style="padding: 20px 0px 20px 0px">
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar015'>
                        <img src="../assets/ar015/main_ar015.png" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Behavioral Economics" />
                        <q-btn size='7px' color="black" text-color="white" label="Covid-19" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar015" style="font-size:18px;line-height:1.4; font-weight:700;font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer;  ">
                        Covid 19 Vaccine announcement and its Behavioral Impact
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar015" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        An analysis of people's fate-driven risk taking behaviour
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by Abhishek Reddy | September 11th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar009'>
                        <img src="../assets/ar009/main_ar009.jpg" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Business" />
                        <q-btn size='7px' color="black" text-color="white" label="Covid-19" />
                        <q-btn size='7px' color="black" text-color="white" label="MSME" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar009" style="font-size:18px;line-height:1.4; font-weight:700; font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer; ">
                        Slow Burn
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar009" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        The Impact of Covid-19 on MSMEs in India
                        </a>
                        <div class="text-subtitle2"  style="font-size:12px;"><i>by Kartikeya Bhatotia & Ridhi Aggarwal | September 8th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar001'>
                        <img src="../assets/ar001/main_ar001.png" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Development Economics" />
                        <q-btn size='7px' color="black" text-color="white" label="Inequality" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar001" style="font-size:18px;line-height:1.4; font-weight:700;font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer;  ">
                        Universal Basic Income: A Critical Analysis of the Theory and Evidence
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar001" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        A strong case for implementation?
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by Akash Chowdhury | September 11th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar019'>
                        <img src="../assets/ar019/main_ar019.png" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Competition Law" />
                        <q-btn size='7px' color="black" text-color="white" label="Digital Markets" />
                        <q-btn size='7px' color="black" text-color="white" label="Technology" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar019" style="font-size:18px;line-height:1.4; font-weight:700;font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer;  ">
                        Competition Control in Digital Markets
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar019" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        How are digital firms misbehaving?
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by AUER Staff | September 4th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar018'>
                        <img src="../assets/ar018/main_ar018.png" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Information Economics" />
                        <q-btn size='7px' color="black" text-color="white" label="Book Review" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar018" style="font-size:18px;line-height:1.4; font-weight:700; font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer; ">
                        Not the New Oil
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar018" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        Exploring the Role of Information as a Business Asset
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by Advaita Singh | September 8th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar020'>
                        <img src="../assets/ar020/main_ar020.jpg" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Labor Economics" />
                    <q-btn size='7px' color="black" text-color="white" label="Discrimination" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar020" style="font-size:18px;line-height:1.4; font-weight:700;font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer;  ">
                        The Caste-Cursed Labour Economy
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar020" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        How we are losing out and why we need Affirmative Action
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by AUER Staff | September 15th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar006'>
                        <img src="../assets/ar006/main_ar006.png" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Inequality" />
                    <q-btn size='7px' color="black" text-color="white" label="Book Review" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar006" style="font-size:18px;line-height:1.4; font-weight:700; font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer; ">
                        Is culture really the sole determinant of inequality across countries?
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar006" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        A review of Gregory Clark’s claims in ‘A Farewell to Alms’
                        </a>
                        <div class="text-subtitle2"  style="font-size:12px;"><i>by Ishita Singh | September 15th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar021'>
                        <img src="../assets/ar021/main_ar021.jpg" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Education" />
                        <q-btn size='7px' color="black" text-color="white" label="Covid-19" />
                        <q-btn size='7px' color="black" text-color="white" label="Inequality" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar021" style="font-size:18px;line-height:1.4; font-weight:700;font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer;  ">
                        Permanent Impairment of an Economic Muscle
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar021" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        Unequal Opportunities
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by Garima Bhalla & S Arunima | September 15th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar003'>
                        <img src="../assets/ar003/main_ar003.png" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="E-Commerce" />
                        <q-btn size='7px' color="black" text-color="white" label="Covid-19" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar003" style="font-size:18px;line-height:1.4; font-weight:700; font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer; ">
                        How has the E-Commerce Industry Checked Out in the Pandemic Season?
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar003" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        A Closer Look at Growth Potential and Challenges
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by Mansi Ramani | September 8th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar002'>
                        <img src="../assets/ar002/main_ar002.jpg" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Policy" />
                        <q-btn size='7px' color="black" text-color="white" label="Taxes" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar002" style="font-size:18px;line-height:1.4; font-weight:700;font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer;  ">
                        General Commodity Taxes: An Evolution
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar002" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        Is the current tax regime justified?
                        </a>
                        <div class="text-subtitle2" style="font-size:12px;"><i>by Neha Nandakumar | September 15th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
            <!-- POSTS BEGIN -->
            <div class="col-14 col-md-3" style="border-width: 1px;
                          border-style: solid;
                          border-color: #e8e8e8;
                          padding: 5px 5px 5px 5px;
                          max-width:100%;
                          text-align:left;">
                <div id="big-post" style="padding: 5px 5px 0px 5px;max-width:100%;">
                    <!-- Image -->
                    <q-btn @click="showLoading" :ripple="false" flat no-caps padding="none" align="left" to='ar010'>
                        <img src="../assets/ar010/main_ar010.jpg" style="width:100%; height:200px;">
                    </q-btn>
                    <!-- Category -->
                    <div class="row justify-left">
                        <div class="q-gutter-sm" style="padding: 10px 5px 10px 0px">
                        <q-btn size='7px' color="black" text-color="white" label="Behavioral Economics" />
                        <q-btn size='7px' color="black" text-color="white" label="Covid-19" />
                        </div>
                    </div>
                    <!-- Heading -->
                    <div style="border-bottom-width: 2px;
                                border-bottom-style: solid;
                                border-bottom-color: rgb(40, 40, 40);">
                        <a @click="showLoading" class='title-url text-h6' href="#/ar010" style="font-size:18px;line-height:1.4; font-weight:700; font-family: 'Rufina', serif;text-size-adjust:100%; cursor:pointer; ">
                        Consumer Spending Patterns in COVID-19
                        </a>
                    </div>
                    <!-- Subheading -->
                    <div style="padding:10px 0px 0px 0px">
                        <a @click="showLoading" class='subtitle-url text-subtitle1' href="#/ar010" style="font-size:14px;text-size-adjust:100%; cursor:pointer;  ">
                        Emerging Trends and its Impacts
                        </a>
                        <div class="text-subtitle2"  style="font-size:12px;"><i>by Anjana Ramesh | September 15th, 2020</i></div>
                    </div>
                </div>
            </div>
            <!-- POSTS END -->
        </div>
    </q-page>
</template>
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
