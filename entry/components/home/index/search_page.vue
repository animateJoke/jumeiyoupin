<template>
    <div id="search_page" class="show" style="transform-origin: 0px 0px 0px; opacity: 1;">
        <div class="search_head"><a id="history_back" class="pull_left"
                                    style="transform-origin: 0px 0px 0px; opacity: 1; display: none;"><img
                src="//f0.jmstatic.com/btstatic/h5/common/left_arrow.png" alt=""></a>
            <div class="input_outer"><img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt=""
                                          class="search_icon"> <input type="text" placeholder="搜索商品名称、品牌、功效"
                                                                      id="search_input" class="search_input"></div>
            <a id="search_back" class="search_btn" style="transform-origin: 0px 0px 0px; opacity: 1;">返回</a> <a
                    id="search_cancel" class="search_btn"
                    style="transform-origin: 0px 0px 0px; opacity: 1; display: none;">搜索</a></div>
        <ul class="search_links" style="height: 634px; transform-origin: 0px 0px 0px; opacity: 1;">
            <li class="search_link">面部护肤<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">眼部护理</a></li>
                    <li class="search_sub"><a href="#">化妆水/爽肤水</a></li>
                    <li class="search_sub"><a href="#">啫哩/凝露/凝胶</a></li>
                    <li class="search_sub"><a href="#">精华</a></li>
                    <li class="search_sub"><a href="#">面霜</a></li>
                    <li class="search_sub"><a href="#">唇部护理</a></li>
                    <li class="search_sub"><a href="#">洁面</a></li>
                    <li class="search_sub"><a href="#">T区/特殊护理</a></li>
                    <li class="search_sub"><a href="/#">面膜</a></li>
                    <li class="search_sub"><a href="/#">乳液</a></li>
                    <li class="search_sub"><a href="/#">精油</a></li>
                    <li class="search_sub"><a href="/#">护肤套装</a></li>
                </ul>
            </li>
            <li class="search_link">彩妆<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">眼部</a></li>
                    <li class="search_sub"><a href="#">粉饼/散粉</a></li>
                    <li class="search_sub"><a href="#">唇部</a></li>
                    <li class="search_sub"><a href="#">睫毛</a></li>
                    <li class="search_sub"><a href="#">眉部</a></li>
                    <li class="search_sub"><a href="#">美甲</a></li>
                    <li class="search_sub"><a href="#">隔离</a></li>
                    <li class="search_sub"><a href="#">底妆</a></li>
                    <li class="search_sub"><a href="#">遮瑕/修容</a></li>
                    <li class="search_sub"><a href="#">防晒</a></li>
                    <li class="search_sub"><a href="#">卸妆</a></li>
                    <li class="search_sub"><a href="#">腮红</a></li>
                    <li class="search_sub"><a href="#">彩妆套装</a></li>
                </ul>
            </li>
            <li class="search_link">身体护理<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">个人护理</a></li>
                    <li class="search_sub"><a href="#">润肤</a></li>
                    <li class="search_sub"><a href="#">纤体/美体</a></li>
                    <li class="search_sub"><a href="#">手足护理</a></li>
                    <li class="search_sub"><a href="#">护发</a></li>
                    <li class="search_sub"><a href="#">沐浴</a></li>
                    <li class="search_sub"><a href="#">洗发</a></li>
                    <li class="search_sub"><a href="#">美发造型</a></li>
                    <li class="search_sub"><a href="#">口腔护理</a></li>
                    <li class="search_sub"><a href="#">颈部护理</a></li>
                    <li class="search_sub"><a href="#">身体护理套装</a></li>
                </ul>
            </li>
            <li class="search_link">香水<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">女士香水</a></li>
                    <li class="search_sub"><a href="#">香水套装</a></li>
                    <li class="search_sub"><a href="#">男士香水</a></li>
                    <li class="search_sub"><a href="#">中性香水</a></li>
                    <li class="search_sub"><a href="#">Q版香水</a></li>
                </ul>
            </li>
            <li class="search_link">男士护理<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">男士护肤</a></li>
                    <li class="search_sub"><a href="#">男士身体护理</a></li>
                    <li class="search_sub"><a href="#">男士套装</a></li>
                </ul>
            </li>
            <li class="search_link">套装礼盒<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">小样/旅行套装</a></li>
                </ul>
            </li>
            <li class="search_link">美容工具<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">护肤工具</a></li>
                    <li class="search_sub"><a href="#">彩妆工具</a></li>
                    <li class="search_sub"><a href="#">美发工具</a></li>
                    <li class="search_sub"><a href="#">美体工具</a></li>
                    <li class="search_sub"><a href="#">美甲工具</a></li>
                    <li class="search_sub"><a href="#">其他美容工具</a></li>
                </ul>
            </li>
            <li class="search_link">其他<span class="arrow"></span>
                <ul class="search_subs">
                    <li class="search_sub"><a href="#">喜从盒来</a></li>
                    <li class="search_sub"><a href="#">会员生日礼包</a></li>
                </ul>
            </li>
        </ul>
        <ul class="history_lists" style="transform-origin: 0px 0px 0px; opacity: 1; display: none;">
            <div id="clear_history">清空历史记录</div>
        </ul>
        <ul class="recommend_lists" style="display: none;"></ul>
    </div>
</template>

<script>
    export default {
        name: "search_page"
    }
</script>

<style scoped>


</style>