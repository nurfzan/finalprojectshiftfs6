<template>
  <div>
    <h4>{{ message }}</h4>
    <h4>{{ nama }}</h4>
    <h4>{{ listNama }}</h4>
    <hr />
    <ol>
      <li v-for="(student, i) in listNama" :key="i">{{ student }}</li>
    </ol>
    <hr />
    {{ payload }}
    <div class="form-group">
      <label for="name">Nama Buku</label>
      <input
        type="text"
        v-model="payload.name"
        class="form-control"
        id="name"
        placeholder="Nama Buku"
      />
    </div>
    <div class="form-group">
      <label for="Kategori">Kategori</label>
      <select v-model="payload.type_book_id" class="form-control" id="kategori">
        <option value="1">Ensiklopedia</option>
        <option value="2">Novel</option>
        <option value="3">Pendidikan</option>
        <option value="4">Pengembangan Diri</option>
      </select>
    </div>
    <h3 v-if="payload.type_book_id == 1">Aku suka ensiklopedia</h3>
    <h3 v-else-if="payload.type_book_id == 2">Aku gemar membaca novel</h3>
    <h3 v-else-if="payload.type_book_id == 3">
      Aku suka membaca buku-buku pendidikan
    </h3>
    <h3 v-else-if="payload.type_book_id == 4">
      Aku suka membaca buku-buku pengembangan diri
    </h3>
    <h3 v-else>Silakan pilih Buku</h3>
    <hr />
    <h3 v-show="payload.type_book_id">Telah memilih kategori buku</h3>
    <Title :title="payload.name" />
    {{ text }}
    <hr />
    <BootstrapButton>Tambah</BootstrapButton>
    <BootstrapButton><h3>Hello Friend!</h3></BootstrapButton>
    <BootstrapCard>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iure
        facilis illum maxime quasi autem labore earum distinctio nam recusandae
        doloribus ipsa reprehenderit, sint ratione magnam! Sapiente unde animi
        deserunt?
      </p>
    </BootstrapCard>
    <br>
    <BootstrapCard>
        <template v-slot:header>
            <!-- <h3>Ini untuk header</h3> -->
            <img src="~/assets/img/unsplash/pegunungan.jpg" style="height:100px" alt="">
        </template>

        <template v-slot:default>
        <p>Body card</p>
        </template>

        <template v-slot:footer>
            <h3>Ini untuk footer</h3>
            <BootstrapButton>Tambah</BootstrapButton>
        </template>

    </BootstrapCard>

    <Tutorial />
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      message: "Hello Vue.js!",
    };
  },
  data() {
    return {
      nama: "Fauzan",
      listNama: ["Fauzan", "Siska", "Rizki", "Rizal"],
      payload: {
        name: "",
        type_book_id: "",
      },
    };
  },
};
</script>
