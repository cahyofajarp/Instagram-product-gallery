<template>
    <div>
	<loading-bar :progress="100" direction="left" :error.sync="error"></loading-bar>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <router-link :to="{name :'create'}" @click="progressTo(100)" style="background: #3f51b5c7;border-color:#3f51b5c7 !important"
                             class="btn btn-primary">+ Tambah Product</router-link>

                            <router-link :to="{name :'preview'}" class="btn btn-success ml-3">Preview Products List</router-link>
                        </div>
                        <div class="card-body">
                            
                            <table class="table table-responsive table-borderedless d-table">
                                <thead style="background: #8bc34a61">
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(product,$index) in products" :key="$index">
                                            <td>{{ $index+1 }}</td>
                                            <td>{{ product.title }}</td>
                                            <td><img :src="path+'/storage/'+product.image" style="width:200px;height:200px;object-fit:cover"></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                            </table>
                            
                            <infinite-loading @infinite="infiniteHandler" spinner="bubbles">
                                <span slot="no-more"></span>
                            </infinite-loading>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
// import loadingBar from 'vue2-loading-bar';


export default {

    name : 'Index',
    
    data() {
        return {
            path: axios.defaults.baseURL,
            products : [],
            page: 1,
        }
    },
    // created () {
    //     axios.get('/api/product').then(response => {
    //         this.products = response.data.data
    //     })
    // },
    mounted () {
        alert('effe');
    },
    created(){
        alert('1')
    }
    ,
    methods : {
        infiniteHandler($state){
            axios.get('/api/product',{
                params: {
                    page: this.page,
                },
            }).then(({ data }) => {
                if (data.data.data.length) {
                    this.page += 1;
                    this.products.push(...data.data.data);
                    $state.loaded();
                } else {
                    $state.complete();
                }
            })
        }
    }
    
}
</script>