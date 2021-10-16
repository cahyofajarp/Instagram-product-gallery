<template>

    <div class="container mt-3">
        
        <div class="row justify-content-center">
                <div class="col-md-12">
                   <form @submit.prevent="ProductStore" enctype="multipart/form-data">
                        <div class="card">
                            <div class="card-header">
                                <h2>Create Product</h2>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="">Title</label>
                                    <input type="text" v-model="product.title" name="title" placeholder="Masukan Title"
                                    class="form-control">
                                    <div v-if="validation.title">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.title[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">image</label>
                                    <input type="file" ref="file"  v-on:change="onFileChange" placeholder="Masukan Title"
                                    class="form-control">
                                    <div v-if="validation.image">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.image[0] }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                
                                <button type="submit" class="btn btn-md btn-success">SIMPAN</button>
                           </div>
                        </div>
                   </form>
                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
    
            product: {
                title : '',
                image : '',
            },
            validation : []
        }
    },
    methods : { 
        onFileChange(){
            this.product.image = this.$refs.file.files[0]
            console.log(this.product.image);
        },
        ProductStore() {
         
            const form = new FormData;
            form.append('title', this.product.title);
            form.append('image', this.product.image);

            axios.post(`http://127.0.0.1:8000/api/product`,form)
            .then((response) => {
                this.$toast.success('Success Created Product', {
                    type: 'success',
                    position: 'top-right',
                    dismissible: true,
                })
                    this.$router.push({
                        name : 'home',
                    });
                console.log(response);  
            }).catch(error => {
                this.validation = error.response.data;
                console.log(error);
            });
        }
    }
}
</script>