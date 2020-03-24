<template>
    <div>
        <header-title :rightArrow='true'></header-title>
        <van-index-bar>
            <van-index-anchor index="A" v-if="dataList['A']" />
            <van-cell v-for="(item,index) in dataList['A']" :key="index" :title="item" />
            <van-index-anchor index="B" v-if="dataList['B']" />
            <van-cell v-for="(item,index) in dataList['B']" :key="index" :title="item" />
            <van-index-anchor index="C" v-if="dataList['C']" />
            <van-cell v-for="(item,index) in dataList['C']" :key="index" :title="item" />
            <van-index-anchor index="D" v-if="dataList['D']" />
            <van-cell v-for="(item,index) in dataList['D']" :key="index" :title="item" />
            <van-index-anchor index="E" v-if="dataList['E']" />
            <van-cell v-for="(item,index) in dataList['E']" :key="index" :title="item" />
            <van-index-anchor index="F" v-if="dataList['F']" />
            <van-cell v-for="(item,index) in dataList['F']" :key="index" :title="item" />
            <van-index-anchor index="G" v-if="dataList['G']" />
            <van-cell v-for="(item,index) in dataList['G']" :key="index" :title="item" />
            <van-index-anchor index="H" v-if="dataList['H']" />
            <van-cell v-for="(item,index) in dataList['H']" :key="index" :title="item" />
            <van-index-anchor index="I" v-if="dataList['I']" />
            <van-cell v-for="(item,index) in dataList['I']" :key="index" :title="item" />
            <van-index-anchor index="J" v-if="dataList['J']" />
            <van-cell v-for="(item,index) in dataList['J']" :key="index" :title="item" />
            <van-index-anchor index="K" v-if="dataList['K']" />
            <van-cell v-for="(item,index) in dataList['K']" :key="index" :title="item" />
            <van-index-anchor index="L" v-if="dataList['L']" />
            <van-cell v-for="(item,index) in dataList['L']" :key="index" :title="item" />
            <van-index-anchor index="M" v-if="dataList['M']" />
            <van-cell v-for="(item,index) in dataList['M']" :key="index" :title="item" />
            <van-index-anchor index="N" v-if="dataList['N']" />
            <van-cell v-for="(item,index) in dataList['N']" :key="index" :title="item" />
            <van-index-anchor index="O" v-if="dataList['O']" />
            <van-cell v-for="(item,index) in dataList['O']" :key="index" :title="item" />
            <van-index-anchor index="P" v-if="dataList['P']" />
            <van-cell v-for="(item,index) in dataList['P']" :key="index" :title="item" />
            <van-index-anchor index="Q" v-if="dataList['Q']" />
            <van-cell v-for="(item,index) in dataList['Q']" :key="index" :title="item" />
            <van-index-anchor index="R" v-if="dataList['R']" />
            <van-cell v-for="(item,index) in dataList['R']" :key="index" :title="item" />
            <van-index-anchor index="S" v-if="dataList['S']" />
            <van-cell v-for="(item,index) in dataList['S']" :key="index" :title="item" />
            <van-index-anchor index="T" v-if="dataList['T']" />
            <van-cell v-for="(item,index) in dataList['T']" :key="index" :title="item" />
            <van-index-anchor index="U" v-if="dataList['U']" />
            <van-cell v-for="(item,index) in dataList['U']" :key="index" :title="item" />
            <van-index-anchor index="V" v-if="dataList['V']" />
            <van-cell v-for="(item,index) in dataList['V']" :key="index" :title="item" />
            <van-index-anchor index="W" v-if="dataList['W']" />
            <van-cell v-for="(item,index) in dataList['W']" :key="index" :title="item" />
            <van-index-anchor index="X" v-if="dataList['X']" />
            <van-cell v-for="(item,index) in dataList['X']" :key="index" :title="item" />
            <van-index-anchor index="Y" v-if="dataList['Y']" />
            <van-cell v-for="(item,index) in dataList['Y']" :key="index" :title="item" />
            <van-index-anchor index="Z" v-if="dataList['Z']" />
            <van-cell v-for="(item,index) in dataList['Z']" :key="index" :title="item" />
        </van-index-bar>
    </div>
</template>
<script>
import { IndexBar, IndexAnchor ,Cell} from 'vant';
import HeaderTitle from '@/components/header.vue'
export default {
    components:{
        HeaderTitle,
        [IndexBar.name]: IndexBar,
        [IndexAnchor.name]: IndexAnchor,
        [Cell.name]: Cell
    },
    data(){
        return {
            indexAnchor:['A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            dataList:{
                A:['111','22222','3333333'],
                B:['111','22222','3333333'],
                C:['111','22222','3333333'],
                D:['111','22222','3333333'],
                E:['111','22222','3333333'],
                F:['111','22222','3333333'],
            }
        }
    }
    
}
</script>
<style scoped lang="stylus">
    >>>
        .van-index-anchor
            background-color #EEE
</style>