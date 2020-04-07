<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="spread">
        <h1 :class="{'dark' : !isDarkMode, 'light' : isDarkMode}">Traffic Overview</h1>
        <div class="toggle" :class="{'light-box' : isDarkMode, 'dark-box' : !isDarkMode}">
          <div ref="days" class="days" v-on:click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" v-on:click="toggleWeeks">Weeks</div>
          <div ref="months" class="months" v-on:click="toggleMonths">Months</div>
        </div>
      </div>
      <apexchart width="100%" type="area" :options="chartOptions" :series="series"></apexchart>
      <iframe
        v-if="isDarkMode"
        width="600"
        height="450"
        src="https://datastudio.google.com/embed/reporting/88bb654a-fb6b-44bb-bacc-1e7ae6d76d1e/page/XfQLB"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
      <iframe v-if="!isDarkMode"
        width="600"
        height="450"
        src="https://datastudio.google.com/embed/reporting/55f63b91-ea33-4bb9-8d02-fa341b63c92e/page/XfQLB"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Home",
  components: {
    Header,
    apexchart: VueApexCharts
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          height: 40,
          fontSize: "18px",
          horizontalAlign: "left",
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        chart: {
          id: "users"
        },
        xaxis: {
          type: "datetime"
        }
      },
      series: [
        {
          name: "Active users",
          data: [
            [new Date("January 1, 2020"), 30],
            [new Date("January 5, 2020"), 40]
          ]
        },
        {
          name: "New users",
          data: [
            [new Date("January 1, 2020"), 80],
            [new Date("January 5, 2020"), 0]
          ]
        }
      ]
    };
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56CCF2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56CCF2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56CCF2";
      this.$refs.months.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/global-styles/color.scss";
@import "@/global-styles/Typography.scss";
.container {
  padding-left: 15%;
  padding-right: 15%;
}

.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}
@media all and (max-width: 767px) {
  flex-direction: column;
}
h1.dark {
  @include Heading-3($black);
}

h1.light {
  @include Heading-3($white);
}

.toggle {
  @include Medium-text;
  color: $dark-gray;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
  }
}
@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
  font-weight: 600;
}
.days {
  @include toggle-settings;
  background: $teal;
  border-radius: 4px;
  color: $white;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}
</style>
