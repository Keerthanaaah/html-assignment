$(document).on("click", ".send_form", function () {
	var input_okabrionz = document.getElementById("wa_email");

	/* Whatsapp Settings */
	var walink = "https://api.whatsapp.com/send",
		phone = "6281311363460",
		walink2 =
			"Halo saya ingin bergabung dengan komunitas MM Kembangan untuk meningkatkan income.",
		text_yes = "Terkirim.",
		text_no = 'Isi semua Formulir lalu klik "Kirim".';

	/* Support for Smartphones  */
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		var walink = "whatsapp://send";
	}

	if ("" != input_okabrionz.value) {
		/* Call Input Form */
		var input_select1 = $("#wa_select :selected").text(),
			input_name1 = $("#wa_name").val(),
			input_email1 = $("#wa_email").val(),
			input_number1 = $("#wa_number").val(),
			input_url1 = $("#wa_url").val(),
			input_textarea1 = $("#wa_alamat").val();

		/* Final Whatsapp URL */
		var okabrionz_whatsapp =
			walink +
			"?phone=" +
			phone +
			"&text=" +
			walink2 +
			"%0A%0A" +
			"Nama : " +
			"%2A" +
			input_name1 +
			"%2A" +
			"%0A" +
			"Email : " +
			"%2A" +
			input_email1 +
			"%2A" +
			"%0A" +
			"Paket : " +
			"%2A" +
			input_select1 +
			"%2A" +
			"%0A" +
			"Alamat Lengkap : " +
			"%2A" +
			input_textarea1 +
			"%2A" +
			"%0A";

		/* Whatsapp Window Open */
		window.open(okabrionz_whatsapp, "_blank");
		document.getElementById("text-info").innerHTML =
			'<span class="yes">' + text_yes + "</span>";
	} else {
		document.getElementById("text-info").innerHTML =
			'<span class="no">' + text_no + "</span>";
	}
});
