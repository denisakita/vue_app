<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="card p-3">
            <div class="d-flex align-items-center">
                <div class="image"> <img :src="profile.avatar_url || ''  " class="rounded" width="155"> </div>
                <div class="ml-3 w-100">
                    <h4 class="mb-0 mt-0">{{ profile.login || '-' }}</h4> <span>{{ profile.url }}</span>
                    <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-flex flex-column"> <span class="articles">Collaborators</span> <span class="number1">{{ profile.collaborators || 0 }}</span> </div>
                        <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">{{ profile.followers || 0}}</span> </div>
                        <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">{{ profile.following || 0 }}</span> </div>
                        <div class="d-flex flex-column"> <span class="rating">Public repos</span> <span class="number3">{{ profile.public_repos || 0 }}</span> </div>

                    </div>
                    <div class="button mt-2 d-flex flex-row align-items-center">
                        <button class="btn btn-sm btn-outline-primary w-100" @click="goToRepositories">Pull Starred Repos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : "Profile",
    data() {
        return {
            profile: {}
        }
    },
    mounted(){
        let authToken = localStorage.getItem('auth_token')
        this.axios.get("http://localhost:8000/profile", {
            headers: {
                'X-AUTH-TOKEN' : authToken
            }
        }).then(response => {

            if(response.data.profile && response.data.profile.login == undefined){
                alert("Not authorized");
                return;
            }
            this.profile = response.data;

            
        })    
    },
    methods: {
        goToRepositories(event) {
            this.$router.push({ path: 'repos' })
        },
    }
}
</script>

<style scoped>
body {
    background-color: #B3E5FC;
    border-radius: 10px
}

.card {
    width: 400px;
    border: none;
    border-radius: 10px;
    background-color: #fff
}

.stats {
    background: #f2f5f8 !important;
    color: #000 !important
}

.articles {
    font-size: 10px;
    color: #a1aab9
}

.number1 {
    font-weight: 500
}

.followers {
    font-size: 10px;
    color: #a1aab9
}

.number2 {
    font-weight: 500
}

.rating {
    font-size: 10px;
    color: #a1aab9
}

.number3 {
    font-weight: 500
}
</style>