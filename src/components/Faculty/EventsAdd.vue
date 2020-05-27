<template>
  <div class="main">
    <FacultyNavBar />
    <div class="container">
      <div class="py-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="/docs/4.3/assets/brand/bootstrap-solid.svg"
          alt
          width="72"
          height="72"
        />
        <h2>Add new event</h2>
        <p class="lead">Enter details about events that students need to know</p>
      </div>

      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 order-md-1">
          <h4 class="mb-3">Event Details</h4>
          <form class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="Location">Event title</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Title"
                  required
                  v-model="eventData.title"
                />
                <div class="invalid-feedback" style="width: 100%;">Title is required.</div>
              </div>
            </div>
            <div class="mb-3">
              <label for="Location">Event Subtitle</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Subtitle"
                  required
                  v-model="eventData.subtitle"
                />
              </div>
            </div>
            <h4 class="mb-3">Event Description</h4>
            <div class="md-3">
              <textarea
                placeholder="Description"
                rows="20"
                name="comment[text]"
                id="comment_text"
                cols="40"
                class="ui-autocomplete-input"
                autocomplete="off"
                role="textbox"
                aria-autocomplete="list"
                aria-haspopup="true"
                v-model="eventData.description"
              ></textarea>
            </div>

            <h5 class="mb-3">Images</h5>
            <div
              id="my-strictly-unique-vue-upload-multiple-image"
              style="display: flex; justify-content: center;"
            >
              <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                @data-change="dataChange"
                :data-images="eventData.images"
              ></vue-upload-multiple-image>
            </div>
            <hr class="mb-4" />
            <button
              class="btn btn-primary btn-lg btn-block"
              type="button"
              v-on:click="submitted()"
            >Publish</button>
          </form>
        </div>
      </div>
      <footer class="my-5 pt-5 text-muted text-center text-small"></footer>
    </div>
    <Footer />
  </div>
</template>

<script>
import FacultyNavBar from "./FacultyNavbar";
import VueUploadMultipleImage from "vue-upload-multiple-image";
import Footer from "../Footer";
import axios from "axios";
export default {
  name: "EventsAdd",
  data() {
    return {
      images: [],
      eventData: {
        title: "",
        subtitle: "",
        description: "",
        images: []
      },
      isSubmitted: false
    };
  },
  components: {
    Footer,
    VueUploadMultipleImage,
    FacultyNavBar
  },
  methods: {
    submitted(formData, index, fileList) {
      if (
        this.eventData.title != "" &&
        this.eventData.subtitle != "" &&
        this.eventData.description != ""
      ) {
        this.isSubmitted = true;
        axios.post("http://192.168.43.199:8083/api/events/events", {
          title: this.eventData.title,
          subtitle: this.eventData.subtitle,
          description: this.eventData.description
        });
        console.log(this.eventData.title);
        console.log(this.eventData.subtitle);
        console.log(this.eventData.description);
        console.log("data", formData, index, fileList);
      }
    },
    uploadImageSuccess() {
      // console.log('data', formData, index, fileList)
      // // Upload image api
      // axios.post('http://your-url-upload', { data: formData }).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    dataChange(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped>
.main {
  margin-top: -60px;
}

.topbar-responsive {
  background-color: #19589d;
  padding: 1rem 1.5rem;
}

.topbar-responsive .topbar-responsive-logo {
  color: #fefefe;
  vertical-align: middle;
}

.topbar-responsive .menu {
  background-color: #19589d;
}

.topbar-responsive .menu li:last-of-type {
  margin-right: 0;
}

.topbar-responsive .menu a {
  color: #fefefe;
  transition: color 0.15s ease-in;
}

.topbar-responsive .menu a:hover {
  color: #c6d1d8;
}

@media screen and (max-width: 39.9375em) {
  .topbar-responsive .menu a {
    padding: 0.875rem 0;
  }
}

.topbar-responsive .menu .topbar-responsive-button {
  color: #fefefe;
  border-color: #fefefe;
  border-radius: 5000px;
  transition: color 0.15s ease-in, border-color 0.15s ease-in;
}

.topbar-responsive .menu .topbar-responsive-button:hover {
  color: #c6d1d8;
  border-color: #c6d1d8;
}

@media screen and (max-width: 39.9375em) {
  .topbar-responsive .menu .topbar-responsive-button {
    width: 100%;
    margin: 0.875rem 0;
  }
}

@media screen and (max-width: 39.9375em) {
  .topbar-responsive {
    padding: 0.75rem;
  }
  .topbar-responsive .top-bar-title {
    position: relative;
    width: 100%;
  }
  .topbar-responsive .top-bar-title span {
    position: absolute;
    right: 0;
    border: 1px solid #fefefe;
    border-radius: 5px;
    padding: 0.25rem 0.45rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .topbar-responsive .top-bar-title span .menu-icon {
    margin-bottom: 4px;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes slideDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@keyframes slideDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@media screen and (max-width: 39.9375em) {
  .topbar-responsive-links {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    width: 100%;
    -webkit-animation: fadeIn 1s ease-in;
    animation: fadeIn 1s ease-in;
  }
}
b {
  color: #fefefe;
  margin-left: 20px;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
}
.active {
  font-weight: bolder;
  text-decoration: none;
}
</style>