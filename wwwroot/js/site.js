$(document).ready(
    function() {
        $("#formCadastro").submit(
            function(e) {
                e.preventDefault();
                Cadastrar();
            }
        );
    }
);

function Cadastrar() {
    var parametros = {
        Nome: $("#idNome").val(),
        Email: $("#idEmail").val(),
        Mensagem: $("#idMensagem").val()
    };

    $.post("/Home/Cadastrar", parametros)

    .done(function(data) {
        if(data.status == "OK") {
            $("#formCadastro").after("<h3>Cadastro realizado com sucesso!</h3>");
            $("#formCadastro").hide();
        }
        else {
            $("#formCadastro").after("<h3>Erro. Tente novamente mais tarde!</h3>");
            $("#formCadastro").hide();
        }
    })

    .fail(function() {
        alert("Erro");
    })
}