<template>
  <div>
    <button class="btn btn-outline-primary rounded-pill w-100 " data-toggle="modal" data-target="#scanQR" @click="isScan=true">
      <i class="fas fa-qrcode"></i> | Presensi Acara
    </button>
    <div class="modal fade" id="scanQR" data-backdrop="false" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Scan QR Code Event</h5>
            <button type="button" class="close" data-dismiss="modal" @click="torchActive=isScan=false;" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div style="height:60vh">
              <!-- <no-ssr>
                <qrcode-stream v-if="isScan" :camera="camera" :torch="torchActive" @decode="onDecode" @init="onInit">
                </qrcode-stream>
              </no-ssr> -->
            </div>
            <div style="height:25vh">
              <hr>
              <div class="text-center mb-3">
                <button class="btn btn-secondary" @click="switchCamera">
                  <i class="fas fa-camera fa-lg"></i>
                </button>
                <button @click="torchActive = !torchActive" class="btn ml-3" :class="torchActive?'btn-primary':'btn-secondary'" :disabled="torchNotSupported">
                  <i class="far fa-lightbulb fa-lg"></i>
                </button>
                <p v-if="torchNotSupported" class="error">
                  Torch not supported for active camera
                </p>
              </div>
              <div class="input-group">
                <input type="text" class="form-control rounded-left" v-model="code" placeholder="Menggunakan kode" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                  <button class="btn btn-primary" @click="getSchedule()" style="width:100px" type="button" id="button-addon2">Hadir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: "",
      //   user: this.$auth.user,
      isScan: false,
      camera: "rear",
      torchActive: false,
      torchNotSupported: false,
      noRearCamera: false,
      noFrontCamera: false,
    };
  },
  methods: {
    async onDecode(qrcode) {
      const code = qrcode;
      this.isScan = false;
      this.torchActive = false;
      $("#scanQR").modal("hide");
      this.code = code;
    },
    switchCamera() {
      switch (this.camera) {
        case "front":
          this.camera = "rear";
          break;
        case "rear":
          this.camera = "front";
          break;
      }
    },
    async onInit(promise) {
      try {
        const { capabilities } = await promise;
        this.torchNotSupported = !capabilities.torch;
      } catch (error) {
        const triedFrontCamera = this.camera === "front";
        const triedRearCamera = this.camera === "rear";
        const triedAutoCamera = this.camera === "auto";

        const cameraMissingError = error.name === "OverconstrainedError";
        if (triedRearCamera && cameraMissingError) {
          this.camera = "front";
        } else if (triedFrontCamera && cameraMissingError) {
          this.camera = "auto";
        } else if (triedAutoCamera && cameraMissingError) this.camera = "rear";
      }
    },
  },
};
</script>