<template>
  <div class="panel bg-indigo-900">
    <div class="row row-header bg-indigo-900">
      <div class="col-12 col-sm">
        <div class="card justify-center">
          <div class="card-body text-center">
            <a
              href="/home"
              class="date text-md-center text-white align-text-center rounded-sm font-semibold italic"
            >
              <span
                >Check your Todos for:
                {{ moment(new Date()).format('dddd, MMMM Do YYYY') }}</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      moment,
    }
  },
}
</script>

<style>
.row-header {
  margin: 0px auto;
  padding: 0px;
}
.panel {
  margin: 0px auto;
}
</style>
