<template>
    <h3>Repositories</h3>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Full name</th>
                <th scope="col">Created At</th>
                <th scope="col">Url</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(repo, index) in repositories" :key="index">
                <th scope="row">{{ repo.id }}</th>
                <td>{{ repo.name }}</td>
                <td>{{ repo.full_name }}</td>
                <td>{{ repo.created_at }}</td>
                <td><a :href="repo.downloads_url">Download </a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name : "ReposList",
     data() {
        return {
            repositories: {}
        }
    },
    mounted(){
        let authToken = localStorage.getItem('auth_token')
        this.axios.get("http://localhost:8000/repositories", {
            headers: {
                'X-AUTH-TOKEN' : authToken
            }
        }).then(response => {
            this.repositories = response.data;
        })    
    }
}
</script>