<template>
  <l-map style="height: 350px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-geo-json :geojson="geojson" :options="options"></l-geo-json>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'

function onEachFeature(feature, layer) {
  layer.on('mouseover', (e) => {
    e.target.setStyle({
      color: '#FF0000',
    })
  })
  layer.on('mouseout', (e) => {
    e.target.setStyle({
      color: '#493afc',
    })
  })
  layer.on('click', () => {
    this.$router.push(`przesyłki/${feature.properties.nazwa}`)
  })
  layer.bindTooltip(`<div>${feature.properties.nazwa}</div>`, {
    permanent: false,
    sticky: true,
  })
}

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 5,
      center: [51.919438, 19.145136],
      geojson: null,
      options: {
        onEachFeature: onEachFeature.bind(this),
        style: {
          color: '#493afc',
        },
      },
    }
  },
  async created() {
    const response = await fetch(
      'https://raw.githubusercontent.com/ppatrzyk/polska-geojson/master/wojewodztwa/wojewodztwa-medium.geojson'
    )
    this.geojson = await response.json()
  },
}
</script>