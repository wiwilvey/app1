var server="https://klubaners.web.id/wb/";
$(document).ready( function(){
	//ambil daftar destinsi dari server
	$.getJSON(
		server+"destinasiDft.php",
		function(deswi){
			// kosongkan div id=destinasi dari elemen li
			$("#destinasi li").remove();
			
			// olah variabel deswi, hasil output dari server
			$.each(deswi, function(i,ow){
				//tambahkan li ke div id=destinasi
				// nama key / kunci variabel deswi adalah:
				// dObjWisata,namaObj,desa,kecamatan, dan koordinatPeta
				$("#destinasi").append(
					"<li class='list-group-item'>"+
					"<p class='namaOw'>"+ow.namaObj+"</p>"+
					"<p><label>Kecamatan :</label>"+ow.kecamatan+"</p>"+
					"<p><label>Desa :</label>"+ow.desa+"</p>"+
					"<p class='lokasiOw'><label>Lokasi GPS :</label>"+ow.koordinatPeta+"</p>"+
					"</li>"
				);
			});
		}
	);
})
