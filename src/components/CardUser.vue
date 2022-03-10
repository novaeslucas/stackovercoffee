<template>
    <div class="row mb-2">
        <div class="col-md-11 offset-md-1">
            <div class="card text-black bg-light mb-3">
                <div class="card-body">
                    Criado por {{ login }} em {{ data_criacao }}
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