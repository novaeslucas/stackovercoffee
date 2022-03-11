<template>
    <div class="row mb-2">
        <div class="col-md-4 offset-md-8">
            <div class="card text-black bg-light mb-3">
                <div class="card-body fs-14px">
                    <div class="row">
                      <p>Perguntado em {{ data_criacao }}</p>
                    </div>
                    <div class="row">
                      <p>{{ login }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cardUser",
    props: {
      login: {
        type: String,
        required: true,
      },
      data_criacao: {
        type: String,
        required: true,
      },
    },
}
</script>