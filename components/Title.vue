<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "Judul Kelas",
        },
    },
};
</script>