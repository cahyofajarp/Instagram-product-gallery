<template>
    <div>
        <div class="container mt-5">
            <div class="content-preview">
                <div class="row" v-if="products.length > 0">
                   <div :class="[getCol(index) ? 'col-md-12' : 'col-md-6']" v-for="(product,index) in products" :key="index">
                        
                        <div class="card">
                            <div class="title-text" :style="[getCol(index) ? {'height':'400px'} : '']">
                                <p>{{ product.title }}</p>
                            </div>
                            <img :src="path+'/storage/'+product.image" alt="" 
                            :style="[getCol(index) ? {'width':'100%','height':'400px','object-fit':'cover'} : {'height':'200px','width':'100%','object-fit':'cover'}]">
                            <p class="mt-3">Lod Denim Store</p>
                        </div>
                   </div>
                </div>
                
                <div class="row" v-else>
                    <div class="mb-4" :class="[getCol(index) ? 'col-md-12' : 'col-md-6']" v-for="(loader,index) in products_loader" :key="loader">
                        <div class="card">
                            <ContentLoader />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {ContentLoader} from 'vue-content-loader'
import axios from 'axios'

export default {

    name : 'Preview',
    components :{
        ContentLoader
    },
    data() {
        return {
            path: axios.defaults.baseURL,
            products : [],
            products_loader : 10
        }
    },
    created () {
        axios.get('/api/preview').then(response => {
            this.products = response.data.data
        })
    },
    methods : {
        getCol(index) {
            return (index+1) % 5 == 0 
        }
    }
    
}
</script>
<style scoped>
.card{
    border-radius:10px;
    border:none; 
}
.card .title-text{
    background: #0000006a;
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 200px;
    
    border-radius: 10px;
}
.card .title-text p{
    color:white;
    margin-left: 20px;
    margin-top: 30px;
}
.card img{
    border-radius: 10px;
}
</style>