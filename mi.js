const readlineSync = require("readline-sync");
const fs = require("fs");
var fetch = require("node-fetch");
var chalk = require("chalk");
var moment = require('moment');

function bytext(code) {
    const index = fetch(`https://hd.mi.co.id/id/eventapi/api/imeiexchange/getactinfo?from=pc&imei=${code}&email=dowerarts@gmail.com&tel=&captchaCode=vj3x`, {
            headers: {
                'Host': 'hd.mi.co.id',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0',
                'Accept': '*/*',
                'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
                'Accept-Encoding': 'gzip, deflate, br',
                'Referer': 'https://www.mi.co.id/id/imei-redemption/',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://www.mi.co.id',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'Priority': 'u=0',
                'Te': 'trailers',
                'Cookie': 'serviceToken=lFBb%2FuuLOqI1NKbVD%2BY7i32a%2F20T44GKduKKRU8uulU6WZ5QTNoyFwGlbrVVeJjZpqg6LPvmqS%2B4xYnI5cNIhVPKpR%2BNdXwzWjcPuXQ7Y7a8Z7hjG3JFFDD4NEyyR2Ar%2B9q7VAWXfU2nGSercFV8%2BTLtOOwREr4pZYdNuur0uz8%3D; xm_user_id_num=0; _ot_use_type=1; _ot_instance_id=0qqa12t0gy59gouyr3x4cwa3asjytghn; _ot_referrer_path=https://global.account.xiaomi.com/fe/service/sns/login/email?_new=true&expires_in=0&state=7b227469636b6574223a22313639363338222c226170706964223a22676f6f676c65222c2263616c6c6261636b223a2268747470732533412532462532466275792e6d692e636f2e696425324669642532466c6f67696e25324663616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532467777772e6d692e636f2e6964253235324669642532353246696d65692d726564656d7074696f6e25323532462532367369676e2533445954686d4e6a6c684d575a684d575a6d4e6a67354e7a59774e6a51344f47466a4e6a566b5954566a5a54457a5a4759794e5463785951253243253243222c226c6f63616c65223a22696e5f4944222c22736964223a226d695f6f76657273656169645f6e6577227d&tsEnToken=8keZyzLaNLnUwbYlUOMWEiHt8btJcRju5vSrvLdia43d5wJYtyTi4SVdQDIu3jLeTb7BPy6FtjA7E73L1VHOE1Yokozt60Lh%252FItMy0gLEF93ylzeV5RQbuhz5WqD2SL8yd%252FBBJHGXVnCo11J5U6kWvd%252Frq1YhFGtCSHIANSejn9xeL0xInSPK6q%252F27lL8dOh61Ws6v5Ubyl5SnQhc%252BxwvOXTGAHZhmiO1cXhhwZy4LPD0GOyk0CtGvPJU6lLJeh7DgAH0syE7GSN1ZaG8Wa%252BRVBW2NShWSpq2qrwh32pEHE8LCX5HPd4D5FRbkc53pkwZombCO7NkBBXpM9n%252FaKaBIEMTVN53ThPY9FmD3OlJ7s9Gb3amqB0Z%252B7DQeCnitHD&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&sns_token_ph=12F00FE3E9AB50A3&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&_locale=in_ID&_uRegion=ID; _ot_prev_uri_path=https://global.account.xiaomi.com/fe/service/sns/login/email?_new=true&expires_in=0&state=7b227469636b6574223a22313639363338222c226170706964223a22676f6f676c65222c2263616c6c6261636b223a2268747470732533412532462532466275792e6d692e636f2e696425324669642532466c6f67696e25324663616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532467777772e6d692e636f2e6964253235324669642532353246696d65692d726564656d7074696f6e25323532462532367369676e2533445954686d4e6a6c684d575a684d575a6d4e6a67354e7a59774e6a51344f47466a4e6a566b5954566a5a54457a5a4759794e5463785951253243253243222c226c6f63616c65223a22696e5f4944222c22736964223a226d695f6f76657273656169645f6e6577227d&tsEnToken=8keZyzLaNLnUwbYlUOMWEiHt8btJcRju5vSrvLdia43d5wJYtyTi4SVdQDIu3jLeTb7BPy6FtjA7E73L1VHOE1Yokozt60Lh%252FItMy0gLEF93ylzeV5RQbuhz5WqD2SL8yd%252FBBJHGXVnCo11J5U6kWvd%252Frq1YhFGtCSHIANSejn9xeL0xInSPK6q%252F27lL8dOh61Ws6v5Ubyl5SnQhc%252BxwvOXTGAHZhmiO1cXhhwZy4LPD0GOyk0CtGvPJU6lLJeh7DgAH0syE7GSN1ZaG8Wa%252BRVBW2NShWSpq2qrwh32pEHE8LCX5HPd4D5FRbkc53pkwZombCO7NkBBXpM9n%252FaKaBIEMTVN53ThPY9FmD3OlJ7s9Gb3amqB0Z%252B7DQeCnitHD&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&sns_token_ph=12F00FE3E9AB50A3&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&_locale=in_ID&_uRegion=ID; _ot_curr_uri_path=https://www.mi.co.id/id/imei-redemption/; _ot_session_id=1729250928533; _ot_ref_tip=; _ot_ref_b=96; _ot_last_time=1729251188338; _ot_last_source=; _ot_utm_channel=; _ot_utm_content=; _ot_utm_term=; _ot_utm_type=; _ot_utm_campaign=; _ot_utm_source=; _ot_utm_medium=; xm_geo=ID; xm_user_bucket=9; xmuuid=XMGUEST-541E981C-22D9-1408-1676-48228E3BCF3F; cUserId=l8jf_HppJNVbnPrZ3zcQm3SU_hc; mUserId=N0Hv9px4WWhLQuBt3cMp0Fxd1Nw89YO6Idn%2BsaFc1c4%3D; xm_order_btauth=be992def90db44ef7f4cfb6814bcff43; guserid=8d871b7f615c93c5292243d20ec69645; _gcl_au=1.1.2131875812.1729250929; _ga_188XHR66L9=GS1.1.1729250928.1.1.1729251188.59.0.0; _ga=GA1.3.1887733564.1729250929; _gid=GA1.3.1738251738.1729250929; _ga_TX77EFMEZB=GS1.3.1729250929.1.1.1729251187.0.0.0; _fbp=fb.2.1729250929571.346835795747778054; _ga_EDQZL1E4Z6=GS1.1.1729251127.1.1.1729251187.0.0.0; _gat=1'
            }
        })

        .then(async (res) => {
            const headers = res.json()

            return headers;
        });

    return index;
}

function claim(code) {
    const index = fetch('https://hd.mi.co.id/id/eventapi/api/imeiexchange/redeem', {
        method: 'POST',
        headers: {
          'Host': 'hd.mi.co.id',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0',
          'Accept': '*/*',
          'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
          'Accept-Encoding': 'gzip, deflate, br',
          'Referer': 'https://www.mi.co.id/id/imei-redemption/',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Content-Length': '251',
          'Origin': 'https://www.mi.co.id',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-site',
          'Priority': 'u=0',
          'Te': 'trailers',
          'Cookie': 'serviceToken=lFBb%2FuuLOqI1NKbVD%2BY7i32a%2F20T44GKduKKRU8uulU6WZ5QTNoyFwGlbrVVeJjZpqg6LPvmqS%2B4xYnI5cNIhVPKpR%2BNdXwzWjcPuXQ7Y7a8Z7hjG3JFFDD4NEyyR2Ar%2B9q7VAWXfU2nGSercFV8%2BTLtOOwREr4pZYdNuur0uz8%3D; xm_user_id_num=0; _ot_use_type=1; _ot_instance_id=0qqa12t0gy59gouyr3x4cwa3asjytghn; _ot_referrer_path=https://global.account.xiaomi.com/fe/service/sns/login/email?_new=true&expires_in=0&state=7b227469636b6574223a22313639363338222c226170706964223a22676f6f676c65222c2263616c6c6261636b223a2268747470732533412532462532466275792e6d692e636f2e696425324669642532466c6f67696e25324663616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532467777772e6d692e636f2e6964253235324669642532353246696d65692d726564656d7074696f6e25323532462532367369676e2533445954686d4e6a6c684d575a684d575a6d4e6a67354e7a59774e6a51344f47466a4e6a566b5954566a5a54457a5a4759794e5463785951253243253243222c226c6f63616c65223a22696e5f4944222c22736964223a226d695f6f76657273656169645f6e6577227d&tsEnToken=8keZyzLaNLnUwbYlUOMWEiHt8btJcRju5vSrvLdia43d5wJYtyTi4SVdQDIu3jLeTb7BPy6FtjA7E73L1VHOE1Yokozt60Lh%252FItMy0gLEF93ylzeV5RQbuhz5WqD2SL8yd%252FBBJHGXVnCo11J5U6kWvd%252Frq1YhFGtCSHIANSejn9xeL0xInSPK6q%252F27lL8dOh61Ws6v5Ubyl5SnQhc%252BxwvOXTGAHZhmiO1cXhhwZy4LPD0GOyk0CtGvPJU6lLJeh7DgAH0syE7GSN1ZaG8Wa%252BRVBW2NShWSpq2qrwh32pEHE8LCX5HPd4D5FRbkc53pkwZombCO7NkBBXpM9n%252FaKaBIEMTVN53ThPY9FmD3OlJ7s9Gb3amqB0Z%252B7DQeCnitHD&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&sns_token_ph=12F00FE3E9AB50A3&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&_locale=in_ID&_uRegion=ID; _ot_prev_uri_path=https://global.account.xiaomi.com/fe/service/sns/login/email?_new=true&expires_in=0&state=7b227469636b6574223a22313639363338222c226170706964223a22676f6f676c65222c2263616c6c6261636b223a2268747470732533412532462532466275792e6d692e636f2e696425324669642532466c6f67696e25324663616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532467777772e6d692e636f2e6964253235324669642532353246696d65692d726564656d7074696f6e25323532462532367369676e2533445954686d4e6a6c684d575a684d575a6d4e6a67354e7a59774e6a51344f47466a4e6a566b5954566a5a54457a5a4759794e5463785951253243253243222c226c6f63616c65223a22696e5f4944222c22736964223a226d695f6f76657273656169645f6e6577227d&tsEnToken=8keZyzLaNLnUwbYlUOMWEiHt8btJcRju5vSrvLdia43d5wJYtyTi4SVdQDIu3jLeTb7BPy6FtjA7E73L1VHOE1Yokozt60Lh%252FItMy0gLEF93ylzeV5RQbuhz5WqD2SL8yd%252FBBJHGXVnCo11J5U6kWvd%252Frq1YhFGtCSHIANSejn9xeL0xInSPK6q%252F27lL8dOh61Ws6v5Ubyl5SnQhc%252BxwvOXTGAHZhmiO1cXhhwZy4LPD0GOyk0CtGvPJU6lLJeh7DgAH0syE7GSN1ZaG8Wa%252BRVBW2NShWSpq2qrwh32pEHE8LCX5HPd4D5FRbkc53pkwZombCO7NkBBXpM9n%252FaKaBIEMTVN53ThPY9FmD3OlJ7s9Gb3amqB0Z%252B7DQeCnitHD&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&sns_token_ph=12F00FE3E9AB50A3&sns_encrypt=3n06jvVXpI3%252B1FuiGwdweZIBBNqNQbiNN8nNoFwpAkAfEuvZ1TkT%252FP249mbh7NM73yrGDfbnMkV9MW8LLXvoCGJOwI5IJgrGz7wZVSR3tUNd87Ms8AIltm%252BesWJb4O2IZXg2Ioeo6Pk433tr7pduUPBmt%252F%252Fm%252BVFPWUegs8h3keEwOkIZ%252Fklu3KHzgru7kWqM6u0Mxc2xq9sIkJ%252FApZjvejoLkfKx9j4dnOG%252Fvlrm5sPeZTSich4UqKUm8Kn4xztjW4hG3C2MEo5IkyxRxFEQWNEZab6HfJKiNA2mcaNWmiGapm1EoA%252BTn70t%252BWbhQbMfcUnU1jBphEZwJvbRmNmz%252Fu6dyUBskCuaXFd9kbyJVTmxoDt1Ux6mVQt85KWZpJlBB01q0Pg%252BpMOg%252F%252FC2xJwUPQ%253D%253D&_locale=in_ID&_uRegion=ID; _ot_curr_uri_path=https://www.mi.co.id/id/imei-redemption/; _ot_session_id=1729250928533; _ot_ref_tip=; _ot_ref_b=96; _ot_last_time=1729252160978; _ot_last_source=; _ot_utm_channel=; _ot_utm_content=; _ot_utm_term=; _ot_utm_type=; _ot_utm_campaign=; _ot_utm_source=; _ot_utm_medium=; xm_geo=ID; xm_user_bucket=9; xmuuid=XMGUEST-541E981C-22D9-1408-1676-48228E3BCF3F; cUserId=l8jf_HppJNVbnPrZ3zcQm3SU_hc; mUserId=N0Hv9px4WWhLQuBt3cMp0Fxd1Nw89YO6Idn%2BsaFc1c4%3D; xm_order_btauth=be992def90db44ef7f4cfb6814bcff43; guserid=8d871b7f615c93c5292243d20ec69645; _gcl_au=1.1.2131875812.1729250929; _ga_188XHR66L9=GS1.1.1729250928.1.1.1729252160.26.0.0; _ga=GA1.3.1887733564.1729250929; _gid=GA1.3.1738251738.1729250929; _ga_TX77EFMEZB=GS1.3.1729250929.1.1.1729251187.0.0.0; _fbp=fb.2.1729250929571.346835795747778054; _ga_EDQZL1E4Z6=GS1.1.1729251127.1.1.1729251187.0.0.0'
        },
        body: new URLSearchParams({
          'from': 'pc',
          'goodsId': '4223709749',
          'channel': 'Mi.com',
          'email': 'apriamsyah15@gmail.com',
          'tel': '',
          'captchaCode': 'vj3x',
          'imei': code,
          'activityId': '647',
          'goodsName': 'Xiaomi 14T Pro Titan Gray 12 GB + 512 GB',
          'invoiceUrl1': '',
          'invoiceUrl2': '',
          'invoiceUrl3': '',
          'isSubscribe': '1'
        })
      })

        .then(async (res) => {
            const headers = res.json()

            return headers;
        });

    return index;
}

(async () => {
    while (true) {
        const code = `8629980712${generateFiveDigits()}`;

        // const checking = await bytext(code);
        // console.log(checking);
        // const msg = checking.msg;

        // if (msg.toLowerCase() == "success") {
        //     console.log(`${chalk.white('[')}${chalk.green('!')}${chalk.white(']')} ${chalk.green(code)} ${chalk.white('=>')} ${chalk.green(msg)}`);
        //     const activityName = checking.data.goodsList[0].actList.map(activity => activity.activityName);
        //     activityName.forEach(element => {
        //         console.log(`    Voucher Available ${chalk.yellow(element)}`)
        //     });

            const claimData = await claim(code);
            if (claimData.msg.match('jumlah aktivitas ')) {
                console.log(`    Imei ${code} Bisa digunakan dan claim voucher manual disimpan di imei.txt`);
                fs.appendFileSync('imei.txt', `${code}\n`);
            } else {
                console.log(`    Imei ${code} tidak Bisa digunakan dan claim voucher otomatis`);
            }
        // } else {
        //     console.log(`${chalk.white('[')}${chalk.red('!')}${chalk.white(']')} ${chalk.red(code)} ${chalk.white('=>')} ${chalk.red(checking.info)}`);
        // }
    }
})();

function generateFiveDigits() {
    return Math.floor(10000 + Math.random() * 90000); // Menghasilkan angka acak 5 digit
}