<template>
  <div id='app'>
<div class="wrapper row0">
    <topbar></topbar>
    <!-- </div> -->
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row1">
<myheader></myheader>
</div>
<div class="wrapper row3">
<gallery></gallery>
</div>
<div class="wrapper row3">
  <main class="hoc container clear">

    <div class="clear"></div>
  </main>
</div>

<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->

<div class="wrapper row3">
  <main id="ez" class="hoc container clesar">
  <div class="title_section">
    </br>
      <div class="title4">学岛易选校</div>
      <p class="title1">教你选学校，帮你选专业</p>
    </br>


    <p class="title2"><span class="icon_1">3<span style="font-size:20px">份</span></span>升学计划</p>
    <p  class="title2"><span style="margin-left:49px;"><span class="icon_1">3<span style="font-size:20px">次</span></span>内部推荐</span><span class="corner-ribbon">学岛独家</span></p>
    <p class="title2"><span class="icon_1">3<span style="font-size:20px">重</span></span>质量保障</p>
      </div>
<a name="buybutton"></a>
<eztable></eztable>

    <div class="group">
  <div class="one_half first">

<ul>
<li><h4><span class="icon_2">叁</span>份最优留学升学计划</h4>
  填写留学需求，一次收获三份升学计划，包含：
<ul class="three_plan">
  <li>最优选校方案</li>
  <li>专业选择及推荐理由</li>
  <li>留学申请准备时间规划</li>
  <li>综合能力提升建议</li>
  <li>1小时行家单独沟通解读报告</li>
</ul>
  <div style="display:none;">Proposal Sample Download 样板计划下载</div>

</li>
<li><h4><span class="icon_2">叁</span>重申请保障</h4>
  <div id="accordion" class="accordion" @click="onToggle($event)"><strong>保障1: </strong>认证专家 <i class="fa fa-chevron-circle-left" aria-hidden="true"></i></div>
  <div class="qa_panel">
所有的留学行家都经过学岛认证。</br>
我们选择具有5年以上申请经验，必须有海外留学经历的行家进行合作，</br>
并根据你的学校和拟申请专业，挑选在该领域擅长的行家进行匹配。
  </div>
  <div id="accordion" class="accordion" @click="onToggle($event)"><strong>保障2: </strong>合理方案 <i class="fa fa-chevron-circle-left" aria-hidden="true"></i></div>
  <div class="qa_panel">
每一份计划书均由学岛质控小组经过二次审核，经过学岛的质量认证后才发到你的手中。</br>
我们承诺，如果最终选择该行家的留学服务，易选校的升学计划都可以作为留学服务合同的选校凭证，绝对杜绝夸大方案，缩水方案。
  </div>
  <div id="accordion" class="accordion" @click="onToggle($event)"><strong>保障3: </strong>透明沟通 <i class="fa fa-chevron-circle-left" aria-hidden="true"></i></div>
  <div class="qa_panel">
用户在和留学行家沟通的过程中，学岛客服作为第三方全程陪伴，协助预约时间，监督行家的咨询真实、透明，保障用户的权益。
  </div>


</li>
<li><h4><span class="icon_2">叁</span>次海外名校内部见面会</h4>
学岛网及其合作伙伴与广大海外名校有着广泛的合作关系，包括近100所英国大学，所有澳洲、新西兰院校。</br>
我们会根据易选校中行家的定位，为用户争取最多3个梦想名校的内部见面会机会，并在见面会前进行培训。</br>
你有机会和名校招生官1对1，为你的升学之路添砖加瓦。</br>
</li>
<li>
  <h4>下单前,如有疑问,详情欢迎咨询学岛客服</h4>
<ul class="contact">
<li><span class="circle"><i class="fa fa-2x fa-weixin" aria-hidden="true"></i></span><span class="method">微信号 :13817475196</span></li>
<li><span class="circle"><i class="fa fa-2x fa-qq" aria-hidden="true"></i></span><span class="method">QQ: 277189023</span></li>
<li><span class="circle"><i class="fa fa-2x fa-envelope" aria-hidden="true"></i></span><span class="method">E-mail: hi@theshare.cn</span></li>
</ul>
</li>
</ul>
  </div>




  <div class="one_half ul_higher">
    <ul>
    <h4>常见问题 Q&A</h4>
    <ul  class="qa">
    <li><strong>Q：易选校是一个怎么样的服务？</strong></li>
    A：这是一个选校方案与价格比较产品。我们旨在让同学更便捷的通过高水准的留学定位方案找到优秀的顾问老师；另一方面，也让顾问老师可以高效的找到自己擅长领域的客户，从而更好的为客户服务。
<!--
    <li><strong>Q：和网络上那些免费选校测试比，易选校有什么不同？</strong></li>
    A：天下没有免费的午餐，免费选校测试都是营销行为，用模糊不清的选校来获取你的信息，随后就是销售的狂轰乱炸。我们的选校服务不玩套路，选择资深的顾问，真真切切的为你服务。另一方面，优秀的顾问老师咨询量特别大，付费选校的用户也会被顾问老师定义为有“明确意向“的学生，和其他免费咨询的同学比，老师也更愿意全身心为付费用户服务。
-->
    <li><strong>Q：每份方案包含多少个申请学校？</strong></li>
    A：我们根据大多数同学的需求，设计的倒金字塔结构选校。英国/澳大利亚/新西兰硕士申请学校定位包含：6个选校（3冲刺/2居中/1保底）；

    <li><strong>Q：为什么易选校要使用倒金字塔结构选校？</strong></li>
    A：大多数留学机构推荐的选校方案是2冲刺，2居中，2保底。根据我们对大量申请数据的分析，如果有一份科学的选校方案，减少一个保底学校，增加一个冲刺学校，申请者最终去到冲刺校（也就是dream school）的概率会增加17%，而最终无法保底的情况也可以避免。因此，增加冲刺学校的方案是对申请者最有利的。

    <li><strong>Q：申请本科可以购买易选校服务吗？</strong></li>
    A：目前我们为申请英国/澳大利亚/新西兰硕士的同学提供易选校定位服务。美国硕士/所有国家本科申请服务产品也将陆续推出。

    <li><strong>Q：我已经签约了中介，需要再购买易选校服务吗？</strong></li>
    A：我们是完全中立的第三方平台，无论你是否已经签约了中介，我们都建议你可以选择我们的服务。已经签约中介的同学，可以测试中介的选校是否最大程度的挖掘了你的潜能，是否会有更好的选择，让你心里更有底。
    <li><strong>Q：顾问老师给出的价格是低价吗？</strong></li>
    A：学岛网为用户争取最大的优惠，与机构达成合作协议，会比市面上同等产品价格更低更优惠。

    <li><strong>Q：如果方案满意，如何与顾问老师取得联系？</strong></li>
    A：对最终满意的方案，如果想与顾问老师取得联系，请先联系学岛网客服，我们会替你预约时间，并将老师的联系方式给你，与顾问老师进行一个小时免费的方案解答。
  <!--
    <li><strong>Q：为什么不是老师打电话给我？</strong></li>
    A：我们保护用户的个人信息，防止被恶意骚扰。因此，只有你最终认可方案，才会将老师的联系方式给你。你可以选择任何你喜欢的方式进行交流（电话、微信、QQ或者线下见面）。

    <li><strong>Q：如果最终选择了易选校推荐的留学老师，学岛网用户还有其他优惠吗？</strong></li>
    A：对于通过易选校选到留学服务的同学，我们还有”惠留学“优选留学包，更多优惠，更多惊喜。详情点击：
-->
    </ul>
</ul>
  </div>
</div>
</main>
<!-- / main body -->
<div class="clear"></div>

</div>



<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!--
<div class="wrapper bgded overlay" style="">
  <section id="people" class="hoc container clear">

    <div class="sectiontitle">
    <h6 class="coachtitle">学岛 <div class="bigdot">·</div> 规划家们</h6>
      <p>onubia nostra per</p>
    </div>
    <ul class="nospace group center">
      <li class="one_quarter first">
          <article><a href="#"><img class="image-circle coach-avatar" src="http://assets.bizjournals.com/lib/img/newsle-empty-icon.png"/></a>
          <h6 class="heading font-x1">James Fong</h6>
          <p>芝加哥大学 计量经济博士</p>
          <p>行业规划师</p>
        </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><img class="image-circle coach-avatar" src="http://assets.bizjournals.com/lib/img/newsle-empty-icon.png"/></a>
          <h6 class="heading font-x1">Chris Chong</h6>
          <p>哥伦比亚大学 天体物理博士</p>
          <p>留学咨询专家</p>
        </article>
    </li>
    <li class="one_quarter">
          <article><a href="#"><img class="image-circle coach-avatar" src="http://assets.bizjournals.com/lib/img/newsle-empty-icon.png"/></a>
          <h6 class="heading font-x1">Lucy He</h6>
          <p>德意志银行 运营总监</p>
          <p>行业规划师</p>
        </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><img class="image-circle coach-avatar" src="http://assets.bizjournals.com/lib/img/newsle-empty-icon.png"/></a>
          <h6 class="heading font-x1">Steven Tang</h6>
          <p>BP石油 人事总监</p>
          <p>行业规划师</p>
        </article>
    </li>
        </ul>
        <button class="coach-button"> <strong><a href="coach_home.html"><i class="fa fa-arrow-circle-down fa-lg" aria-hidden="true"></i> 更多职业规划行家</a></strong></button>

  </section>
</div>-->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row3">
    <moreinfo></moreinfo>
</div>

<div class="wrapper row4 bgded overlay" style="background-image:url('http://www.theshare.cn/Content/globle/images/shop/footer-top.jpg');">
    <myfooter></myfooter>
</div>

</div>

</template>

    <style>

    .image-circle {border-radius:50%;}
    .coach-avatar{background-color:#FFFFFF;height:100px; margin-bottom:20px;}
    .coach-button{margin:30px auto 0px auto;background-color:#FFFFFF;    width: 50%;    height: 35px;font-size:14px;border-width:0px;}
    .coach-strong{margin:0px auto;display:inline-block;}
    .coach-button strong a {color:#797979;display:block;}
    #ez {background-color: #FBFBFB;padding:15px;transform: translate3d(0,-2px,0);box-shadow: 0 0px 24px 0 rgba(149,96,62,.3);}
    #ez .fa-credit-card ,.fa-handshake-o{color:#54ABDC;display:inline;}
    #ez .title_section{background-color: rgb(251,251,251)}
    #ez .title1{ color: #212223;font-size: 37px; font-weight: 400; line-height: 72px; margin: 0 0 24px; text-align: center; text-transform: uppercase; }
    #ez .title4:before {content: "";	border-top: 1px solid #adb0b2;	display: block;	position: absolute;	width: 60px;	top: 10px;	left: 0}
    #ez .title4:after {	content: "";	border-top: 1px solid #adb0b2;	display: block;	position: absolute;	width: 60px;	top: 10px;	right: 0}
    #ez .title2{ color: #54ABDC; font-size: 20px; font-weight: 800; line-height: 36px; margin: 0 0 24px; text-align: center; }
    #ez .title3{width:100%;margin-bottom:17px;}
    #ez .title4{width:300px;font-size: 19px; font-weight: 600;	color: #adb0b2;	margin: 0 auto;	position: relative;	text-align: center;}
    #ez .icon_1{background-color: #54ABDC;font-size: 30px;padding: 8px;margin:15px;color:#FBFBFB}
    #ez .icon_1:after{content:""}
    #ez .icon_2{background-color: #54ABDC;font-size:30px;padding:5px;color:#FBFBFB;margin:8px}
    #ez .corner-ribbon{background:#ee4433;width:60px;color:#FFF;font-size: 11px;margin-bottom: 5px;z-index: 1;position: relative;top: -20px;padding: 3px;}
    #ez li{display: inline-block;margin: 14px auto;width: 99%;}
    #ez h4{border-left-style:solid;border-width: 3px ;border-left-color: #54ABDC;text-align:left;padding: 0 0 0 15px;}
    #ez h3{color:#54ABDC;display:inline;margin: 0 7px 0;}
    #ez h6{font-size: 20px;}
    #ez .container{margin-top:66px; }
    #ez .qa_panel {padding: 0 18px;background-color: #FBFBFB;max-height: 0;overflow: hidden;transition: max-height 0.2s ease-out;}
    #ez .accordion{font-size: 16px;background:#54ABDC;color:#FBFBFB;margin:5px auto;padding:5px;width: 70%;}
    #ez .accordion .rotate{ -moz-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);transform:rotate(-90deg);}
    #ez .ul_higher{margin-top:10px};
    #ez .qa{padding:0px 5px;}

    #ez .three_plan{margin-left:-24px;list-style: decimal;}
    #ez .three_plan li {display: list-item;margin:5px 0px;}
    #ez .contact{font-size: 15px;;}
    #ez .contact .circle {float:left;display:block;border-radius: 50%;border: 1px solid #C5C5C5;background-color: #C5C5C5;width:55px;height:55px;}
    #ez .contact i{color:#fbfbfb;margin: 11px;}
    #ez .contact li{/*padding:10px 0px;*/}
    #ez .contact .method{color:#f44256;display:inline-block;margin: 13px;}
    @media screen and (max-width:750px) {
      #ez .title3{font-size:11px;}
      #ez .title1{font-size:25px;}
      #ez .title4{width:250px;}
      #ez  h4{font-size:17px;}
      #ez .ul_higher{margin-top:-10px};
      #ez .contact .method{font-size:14px;width:140px;float:right;}
    }

    </style>
    <script>

   import myheader  from "../components/header/header.vue"
   import topbar  from "../components/topbar.vue"
   import topnav  from "../components/topnav.vue"
   import pageintro  from "../components/pageintro.vue"
   import readypackage  from "../components/readypackage.vue"
   import myfooter  from "../components/footer.vue"
   import moreinfo  from "../components/moreinfo.vue"
   import timeline  from "../components/timeline.vue"
   import eztable  from "../components/eztable.vue"
   import gallery from "../components/gallery/gallery.vue"
   import $ from "jQuery";
export default {
    name:'app',
    components:{
    topbar,
    myheader,
    topnav,
    pageintro,
    readypackage,
    myfooter,
    moreinfo,
    gallery,
    timeline,
    eztable
              },
    methods:{

onToggle:function($event){

        var el=$($event.target)[0]
        console.log(el.children[1]);
        el.children[1].classList.toggle("rotate")
      //  element.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = el.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
     } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
     }

}
  }
      }



    </script>
