<template>
  <div class="super-container">
    <div class="sidebar">
      <a href="/"><img :src="require('../assets/SupriyaSrivatsa.jpg')" class="photoImg" title="Home"/></a>
      <a href="/blog/"><img :src="require('../assets/navigators/blog.png')" class="navImages" title="Blog"/></a></span>
      <a href="/bookshelf/"><img :src="require('../assets/navigators/reading.png')" class="navImages" title="Bookshelf"/></a></span>
      <a href="/talks/"><img :src="require('../assets/navigators/mic.png')" class="navImages" title="Talks"/></a></span>
      <a href="/art/"><img :src="require('../assets/navigators/poetry.png')" class="navImages" title="Art"/></a></span>
      <a href="/reachout/"><img :src="require('../assets/navigators/reachout.png')" class="navImages" title="Reach Out"/></a></span>
    </div>

    <div class="container">
        <div class="grid">
            <div class="grid-sizer"></div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/qx-jDzfTO3B3EnaIXXFcEA-OmiJMgGVrwGtG58T7Rm0233c9GIS76z4EzQdyBXbNxjbEhxSgeD6O-Tf6PfG6y0mhRBXuW0yIaYFsy-BjIfnxp-kEiOTFeavnmZhqz1ZmQ5m76Q0subJWLQL7-RetnRlWuYwFiqgFdvdswevIyLUEN7JLe_lnfLQq4aLPLPzhC04dr-n_a0X-7yJ8mVvO3d-MWOZn2kBtO8mhNceA6Cr1IlJ8airQ50feh2XijbNzenGgjpQhueYj792WY9XxFie15YBsw7Py92-psuQWIFMOjpZ_mbVRAC8eFDEnWfD1tpRBf-eS4dr_aIabe99MhiJcAyQK_7RyhxA2skd4wJku92xSf1H77bnz6HnYo_1aA3sxMn95AYq0Klv_deNYaKwUaaKEW0hOVtKAQFEbGnolyraFJKTLv-O4_zoUlqBcOWkOdYlqJ_H3b0Wy2KO4WChGjZP66ZZ5yiNFGRNyzqySgEFtQ9nalP25TnOdlVK-MnHFJlQclo27gI6EyrVHpqiUgkGTplGQJMZApdW9f12yLqJl56W3uu9rW1kVNLcDO6S33uplrXsfvXg_obZ9LbaZrxqdFdgxuApiZ_bkLZYAQrBbTZjwlMhYxD9PWJ5oJnZE8v5G-Hx6Z8UBTYHDZq8sj0eHPo4b=w1560-h899-no" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/_lAtv-1ihrrmrijhWJ4QCU7qrdoZx91PtURK48zORcfeGe5VrXNNGS1_40SsAqdjM9Kjes4Sqd5brae9vOAwBYE4qmKId15JJ360Jqleza9Jb6OsnnNjBWlPgaRWmvRc07MqyVZjjv_C1k0qrB1BXZc6cjfP7MNTP4JTX0ow6gKoPuBi_-86E4ogT2WNszOpCgnVOEyCALUVyjek3Su0ASCysRxqHnQqU4IRPYE5MqiW7bAgn_nSsg3vXrYyb0uGaHrEG-J1ZsYbB-1YxUhEOSP0ki_SlUdesuEXEEAshkbPXTAkXvXYGTGcL17Ht2wvmA51enKAlDiwNOlHGuHIB_4Rt4FOygrqBBSOOvdDYYVsw4x1jtdfRGa7lyu3WvHjhAR_l6k79oKqcnqBg01u3uMRqdyuncueNtMi-exV_p5RvwPDSTdbgfK_jyH9thiC0tshZrxdJ8d0ehsz7Q2WpKqq_Fg3RRWM45pdwrp_dS4SWDkMoLHFu4xlFSVjUGgQ6A2s7VAmVBrLgDcvKPVwLKH3Ep4htCWUu6HroAWJ-KjtVwFrWCJmTy7WQjRyRXy_B-yMyYXyvG4f2XxDwGnr3z_8oVgaDQsXRd6nf-9XnsitTZvi9Pxy7oHCgeqlUXh095R_OnQVPRRs323y9iCC4P7GAYTNdGkL=w675-h899-no" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/TiGRFEHV5tNWa7vY9-W0QEryZqvAL4CldS4YuCALOkIvXtLqzFD2h_esvthgtpD9Z7CXyrusiCoeuCo-LsBnnDOXQhl5ZOA0ilgEhJvEDi97XPcF-4TYSe8mD9rDPJII6e6wlhs2qD4RX5P6OP6jrlaUPRCI-xd30odkEJlA39uG43qlrS6dILrkjTqWoyF9aUrfn0hyvahUllS5UAiE0ObUZiQWdBlurUj7dcWusaRUOu2r5yrdEItBzd4M1Vj8uL5QkFSFpQH0wnP7VR-F08bzx8uWOWjzW65Jg7YS2L0xi-Q72dqzZ8aZGzWkgfXL-0-B5sSU88MaJuxrRM2syMGoiOiAL5WypPoJU5OBcfGFraBY7aDYy-bLuz4sCHak_bPYMBGBpumJQpsTKnOGHRjsc91CSyUA3oLb91vJcHyTZBMybUNWdXEFHL5_GtMYS_OWcuSIc5EIRd1oEVCaqHIb1_GBlwFHkfao1FnNbwwdbTFE7eW0RvUeNJcI3zSQQVzgCEMDZSRJUeegJhlHvZY53IDqinYFapid-mvyKPfvv58BaiBGAfI5a4sgG6J3xQ0wH6sVG5NDTgJsr4Ofpl5YHCe2FD1Pidu_qwVhVlbY5CuKYM8897BJzBh1rFAULoLOaukhbRwxPSkMb1avKBWzJabEWlWc=w1199-h899-no" title="Kukkarahalli Lake" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/zaqwL556aJbdm_sq5OewSpJU9EIdmxXWp06AxTUv-ZjiyPbPzgihJJ3cygTFs-NPpGjce01Pr1NV8qaqwqHzbcf684w9FXeFkBhnT0gztDyDNQw2XWc8ZhRv7QLXCUxZu4P7_Gw68hv7SwjPa-ajgI6yMGe1wUOW31vQNTgjzgP_F0AuNfkVMT46pMoJEB5d4odIuaT9DVQM6Tx1dCmvwCxBT-NVeiqTd1VSBZbe3ypcpQkkukm3RH-94wh6oy9zje9haJezfel3JQm7NCN2N9ecSoM7H3yDPSSuclDtyYfBG9J8rD9fe3C-FnKdgmM5n95o3JVukS5SRqecTFCo6fll-LcYfQTZdLS9kyr_bPk8HBojgbN0Bmj4ntXUsx9gi_55KSlxKRAxLC2X2H4MpkZ0RL_SPA9wvTwS0VA8WzQhZLtgdae6pxCAcy82DMCosRf5vpV8nLbFpThchXasPvM5P7s4w2sa3GoD_Gg1vFEgp0eyjSqHaR_UNVfoY2Tojr1iURUsnOc8iw67dops3L0eNpdzInBv3i80suVlIG3m09PIwce0m2LPx5VUg9q-QFYxk0OBSSzy6NoUaHiZnEk8tqmOkhejTMuEj2dT2caP7KKz0bRfqgnmrByoIKaqGdDtEjyyXI56Tx85H6PdFXCdvvvnuSYZ=w675-h899-no" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/Q6UouSKaiZy49jLXIGrc13ggIURhDqw_7Hl93XUXTLVbzyw_bcYSllm2sO04Fjs5S-GE5xdfvmLIyjNh8tLliBWvv4FjMmqg7v-dGURuLhCDbg0RXZZci_5wdWGafyy49dZlKKatynOB9mrw73jXvBFt-25W9qq4GS9F-18EwlGnFFEXeWLEzmoHal2UnEYUSWnm3N6EqF21RvYlIQmQSKLaaIksnIOehldRoDFb80FBU4HUCoLqnwsIGZ2FbXxvryNm_ZnRat_1zAH895FGHI8nrqjXKuCxVG1tIoDphMqWgQyoQ4HwucerfRdyG79xscenymTFAdqMD85BaH1Z1ymMc5xXAMgwIzQ4JvKK98OrI4N7Slx_jbmY2ZHnNeo-5B0tvtfdJDPaVQUbUditQqPUVWa7-XD2alaOFBCHhizCABAqPZOV9BfC7YajkgTg_8jphysJZHnF9UoxWTalcFjxWQ2nXi0gYcsHy84orfHyCeV6vXBeFkR4dTsBb04Gs6MdI239jkIzurqGrZ5sbxlMZYa-ZHjjutwPTlt8oA6i-8nSw20V8PkzOXjkc-2rmS4nx-gL-tARL4xgtRx0IQGVLDLz5XmseWy9-CuKHGAfV9NPlu5CsUWUt1OEogWLy_Q-rjbk6mzzCwM5TsVlisvzfuSIIEJh=w653-h899-no" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/UzwdY9fzJhtoKvXVCMU5B-c5bbws0c2alS-O_y6H7kqYbZZErgw-t2ZdW_rjvrxgI9QAR2959b013uWhcPEQtzSI4hJGIBD10MP-Ib4lNLctc0xVCwDW_ks5KwaF5tRbh43NQ-4SVM7hNEc6wFNdWpwvk0pKL_G6jbQKYgGL01U91n-2vlbfnuOC8SxQ4U-ARNNmgz1-Ck1QOR13x-IabmYT2dWOcwpnjUc72puScbhVJisOCZXad-GJ574czRfTa2EqJbMlFyxNp426P0lyUFDy1BH9tZILrLE8cfMwn1LZYxzd35okZxu-oC1t_riznHoOMvYMIVpnInUoLY5lRymeXi20ywo8_zI0sYKBZkx-rWs4PBOmJLUuekkmg5ym-6VsQFZarxe3bH2VYOav8_-5OhaRppbs-nuwQjLYzswAXmBQ6jus_OkAv37pKf5SxtJ3VTW-Bk3TaJuFpU6hsnbsWJhNYpJvChcIT3NJsvQSWmxxhMUbRL4B9Jcx1Ii-1Dax7N7Ue4GnS02F-2XHvieEHXeCWEL1nl84ivCZWa_9vyfJPT8KYB0vKmZKROjYesSLFoViiTna0nRSv1d0fNOLew7qjv2y-FE2dB8Cu1tlx5mUe95j6_24ZYxpRoYrD0Cv-OxSIET5DXSxOoJBkDfOCg6sTvuE=w638-h899-no" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/vniVYTSzeTKEhj3rPV4NocTaGIZepgO6wQJu_5DGHtv7hnzbEdPgS1xL15YHLGOrHnIViaNGZQ1ajZQRUCBodbbUKVnPfe5Hg7LyRntQC6QMEgqZPb5sNpiui4W0g5O1OpAz2_HWl4dHxN43JMSTZspDl6hzVjLGHHNFK7mSRH2kap8Fv8GFu9bfbz8lKjUlLZPx5kt71xcbSN_kdqvlJ0xf3axcrqblCV8jy81cUUHwPKvQaUOB1C0W0_E8KvZP6p_ztJchMvORbit16OO1dKqFovOpDcP4ZWon0u7Ltx5ZlZ3EhbAYvECl2HQS5ZNvYHscLMnqDXJ3e5G9BCaYR_NZWqXcv7heJK2Yzed83pCvOMQPzKj9nCNMEVqHGwEKFAtDQH_I5BqlYZ3s8qawuQuQL5JNAe7N1kQFTh0HAz8YCpPRMUyUbEXzn981uckbhO6_fvgHtG5eo5Lm7_NpOBMxIQnVThERJgbd6CBmDZw9fdcmJHItN0Zustd00qqgDbeuT4hsjD_ksXYAFwe5SvKhaBEZ7CefMaDXw5-dutOXWLPUEKrbDZc4BlrHvD_59_Fh3V6nuTtbCqKaoRMsHZBPIC_sVCpUXIwM2NNrh3sGE36Eo5sUM30gM9h-ouu6tF3v6qv0eQscCpP1mFQG2-cQ2gKZNhRs=w1199-h899-no" title="Andaman" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/x20EA0NL0IEbaqb_m5cvdocPkielZaMiMFG4NQFkhMxQ-SKGHgTZPGHVtXzYo1Ax-3VX0CLd0twpAmHfl_NQS-dqBmGl1j7I69MchpI_qUwzPLYqtNTUIUWlvdyzDoc4QTVf3eMVin46vh8N1OYp8pM0M1S9A1aFtQUEv_P0aFS7MBhZGBqSLM1P-qyJ94b55AfAi4pqffUnw4lNUlk4W5FUBpXUBVbSy8RgZeL2suqnhS97fROquN0nZPIKelgfnEDuILBWK0ssDOo4ilDgm2sMDLfPFf17ty-dMM6WxY_uUqzGvmthVkU9o06DpR4908wI0xKbCkzsvrduMKG-eB5EqDXjEpVez2E-K2p1XG57Kvx0eYNvS3WN4gPamiCuqJ5iSmjIegswBCvNcNAFSf2GpDi5FvbUM9lUljwFLY_hpMthafLD3IltVk1Eh9niEfsd39cIAv59IVmP-KEgxNRYoAY9zNaEEmKEi7rh05gmipupPrJvt_gSjScEhb1oZqK9SCVVhFazta_HNA2PfPLyNmFmnMNg7vsI8b5zYXSYYJnhF_qVf9oVxNVEG5h38dobO4Bpg8Vk3mpv8snhmcaD1k7BKTezWQ0wATPI5NSnuEXX75RWKM04q1jfXVx1zEC5JZUGOmKY5r5Tu_vzApfy9_-gsloI=w1733-h972-no" title="Ross Island, Andaman" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/9ZmPS-Vg5RYtUzLW46rGvstZglMdI3R8W8pjQOJt_D5DzRhMqQD0vTDY8o0ryObzeeMyno8d2RIEX_y7txTNRKBuZ_-KyPJCcNRr0ynm3_WwtzbhYj_m15L47oq24H24jRKpmNPHNz3zBm-capIT_jPH0apaY8QySX-59y4Wku1MEZu979cUKUXV_ICTx4rEewzRoPPqopPpsFZzet5WtB38nQj6zAlhkv8u9uLEK5hu8o6bG3ZauHFYPB3lTX2mGGqSHF-tRH8jJFHZwGG2MqequQV59hRf99Lx7DmSbwzddvEPtcYLN1TBRjmY-8Ec_tnxXuyYS_KXfob5SmwGODSf0-Psmj8KWkFi1-IHSkH5MAnYRfgexGxARiXc-r8P-KCBonc9elw8pJmZ5EplebPL2toKay4d8mJohEvMutTL5PjQ-VaCGrb7_xoLo1iJZ8zGwmdM1zFM_uUmkyI7LVGGqKErZCIRW1czKcuSu291a-_QLsweipdMsh74Evdg8nU3TuXEzYv57W7a-f6t9Kew_Q3EjU5yYHmknOCIxSRlso456l-sDqkE61J6ER6-_-GG4TCHJyRzbBdIRyRQT0IXbfPqL8KWCddamrmp0araVbxsHxtASB9ZqhWRmCMdj8imsPM8UTQ6aJ3dJz2AbSPrOdH2mFQWMM9aF9nw7Q-njRhC3DRQEPdN0x9-e-Rx5Dy2uJI9YzaW8dCCXMUY8diEA8AgXdxZyFt8GNVzqRZXSVft=w1297-h972-no" title="Ross Island, Andaman" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/T-EGyCaP9-xObptG8JyNv3P_nwum4lciZvMEcn3ITSQgTPIY4IU02aZVWXp0Ha0gnn5Lo2biI9bD1QVD0LdKKIAHfNVakdZuv7_0Q8oql4k7QIUbCgYk8HQSmWcNjr2neaUIfMQMSs9q4BTMQOZGvlhCOWWnjQzUEoz9Cgs2omFDXTHUz-V1LdGV-aULgl0CvO5Bm6_2P0iELNwmRhvgp_OW2nFRkhqcjxgW9ZDJP_JbZQL4WtFyDZdfL8yMImq6AW279D2BQ6-QbIUPGuAFMj-RK8sq27g3Ggm4JkRUFcfPOYBCu3UTtiQD4CuDWHVK5hxkS0L4NUEBEnbbG5Q10x_xVky3N1wrVFNiRDsgC0I2NqDrLmVaMI3N8wPaH42RUO5-LBh7mDPIFQPnZNufpxv2F2Ilf2E0DDIxRI8BSWiMYilhJK3rDQemnSUlvNoBSqHTcpFJY1B2CYuy4ZFJgSi9BCifQEJmGkjy2ezmIS6ADn3dn__fsctKSYrRVXjjs2gAswMSYtoL1h69DdQICpxmvQtj2TNK7WTgcNDGVLu7fBN3sOZXicTtq6MNoczxDhEH7Wr0-bGp4p53QSXZEVM-RPK-7brtFEY_XChxYBJH3aNZqVM0Qmtuxogv-WTib4lJLtEM1XTI3w8mweqJjDumrUD4NsnIFa0scgcYqRlYUzvTwh2HFmiAaW5wpwwPyjkg-oquniHqqJPsiBwshYC5Y7Rw1LBFdGKzJw1-6_fhmZKx=w730-h972-no" title="Edinburgh" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/0vRYr2ifqI675KRMmzcecOJaUplXyiVM-dZQbxecibwvrWpr1l2_wq9pnWQVyXj1mdjRQEtz_3fOwTGrdsnVcG-_qCCKAE3MOEh-kBSzM6H-5bJ4lgZfwxsKq55RT97rf6MK4V-8wXhAtMuyJa2sH9We6Jd4QUu2THsvNCSwDTXXtM1eCzYz4lrC9Jqo6Q7v9CW2zR7D4epwmYgtS0oM4umcUfrMYKC-IL32Wh5mqZXXWWgYNnGHualdytdWsf6hqwQ3NePHZM38cQ3boQufs2dmuvWOAeSBvT58ZII0BlH-gvHmMIohfNXCMyKXG9w2pWWAdkA5BynoQ7VxRkHlv9I91WCqAIFiuUl-GyyZQR5BrbfCsFLsF0XefgMAulGg1YzgNeEJTv2skMl46Imo3zMbHm-bm8BbnDjlrRsSDLVTsSnLmzBerDsaj-KgCxKs_TnzbWngSqq-UKcRqchsd5UN6n9J-fVULd2Yr0QUMuhlNZ1CdEKgMOD4U_bg6m9FQYKOnE6RXywIT0Mn03mxBLdd6V_TdTJl4-cMiqkl5RfuyeZsFYKONYl-lvucWSbwOhfcuZfijjS6cYKAgCMK6-QUy0TFAptECthgxknpf4ClUPpOx2KSD3uYATllokhPOq7-Ky6SN0tVZbFCtHFj2e8UGlciH7tQrEG_bpeupzDiqaKvag_lxhyX1nHCAZ1ypzVHB0hHZhMHf_ljUHvBwmusrOh0Lclv5X1ZrOCekFpIz9-4=w1373-h972-no" title="Edinburgh Castle" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/QIR5SUIFPNUPQrsHgNVsmo2gzilr3jTpPdp9521UxoFu9tRHHyt0awVm-feEgg7UuhtXztpMJmwE1h1mbXn4nqq4NQItaL-0c8rgz_4xwq3OmIQbpvKhx0lbWTREysK1YesC29xKkQBqbO4wkfrpBwN-FSL_TiOnKnbF_7Dle9thuef_iOxVRyUMkR0HRUMT9eUKn2RqK6i_BNbw1Kb4JazYpm3KMy2T_Lk0teLhaLo-uUAJ71NoGJQf99aoEU7majZG7zte8cJeWBkyvWZ215wvZEaapRG-rlDWaO2HSx2tflUp5zmYbH5Q4HoQ9mO__PPiO8dqyF6kV0qe-At_AZkfz8OFbVG-32-Hjn9D8fPsB-JF5GAJiu5Gmu2Q0y9LPWvGvri1Zk6Mhq8iNEc8PlK_F66NXDHEGK0lJrqFVbX4tednSH1d-ycUUrbmcLV0UeaAa4NF8skFtAOMkFw2ZajR39jxDDRks2Pfon1ARYRsJpKndqZ80KP4edQJ7A3BIyHAOLV_9-wxW98HeeuYKa8DER80cUOM0thnDu5i1ZU9J7N15v5UWAaG2dKUHbvjRzI2GxO1x7pbYldnP-r59_oZStSD9mDN5Q5noHmVQRwhHt5-Kml9DlL3w2Tv17heE2k3fTTyi7RXE4El3Hwu4r4i5NjKcx2t=w675-h899-no" title="Creek Enroute Portree" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/cw1iyUD5CyaFkImuzG9SclW3Lf75DZXLKw5oM2QV9fg5jOX4VhDFpQghErqpo8bJWpeuHsponWtTmVuqL77ZH4FvwFcz92rp3abZ86DLsImFg5ZzHkFnb2dRsCp350apyGGMmD1NUucCIijV7CVCG8cqOR7ZHpUjA9ig9GHVoX-7ffLOYAmOoq57V5km27GzmVZgZDcTFBq7Z6vHxbGvlcIaSHzrK5WPWRTjnEJrxhWmrS76V0AD0yGDesxo_9NhSFPxufE6LTgV3B_-wCt6dTuEqNB42v3k655ZBB-rkDm_nf2Y0QLLicPzpY7ITWlsx_C8l9SsrVyzDdzVuyx_Q--SQeUlZ9hmSCDUWJJ9x9TLhhNXJTPadyWes35rzktxp9joXI3kIEw4ZRxPqlxjEh3y_EqY6O354Z9p0ojlOxw3rVCzWADWSH7BQEIRhqeakKUscjNmud5v9QXTQcnxC0OLBb900SsTJONYnzewz3-B6dy42Ns8URcL6d9eqYp3MBaWWppHI7qgfhYHI9PJNPNWC6LoKplkb2nOWAJbrnU1YpZVHunEFjaNo-KY4WAAId7a4137rTVOZad1IdZTfXqFMPcWaXGEtleSv-3hbBY2IXbtFpKANqmDeruwJ0s1ynU6EBT39EvuJzNjoM2lYO2AB37i4gN2=w1199-h899-no" title="Nelson Monument, Edinburgh" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/nFFqnb10O2F7t4MrgJ3z3KanTMC2rSYdbmynUQ9Y5ChDoi-xgpImueB8udr8eSVpDkFbbyzMs27stnF2f3Xl8jYKt94k_NpmWeVQFGmuwhqupLuO9u6rPP6JoZt5iF_dNjXPlAU49nhSoVaxjW-kqvqgEzNGO88vlb0iaTpBIig0-UU0whsrcGOMCW15NcgYbC5E7K1_UPwykZxnrjISgGelVWiWu3z6iUYM7qBdoVP75tiu_Ham9qxO0h3BO81QLwJK85sR7s2e1Ap9je_gt8i0sA1vx-KjIuEVw7U9JYIBklE-U7OFTFI2iSPPKC99ZGNij1tEHiH73sHKc1BuloIxeJx3adPvzsdfzs3Y3IKlG0amr68CP-oKypv9Vv9jdNkmo_lPqyHEP-DJ_qVH1WJ_c2TCgrBig8tNSKwwlsLX9DAW52gXbFuvN4ay1mvn_5rDN3SgF5XNHQvnFCOKbiITa1EZQuYz1Cd8pDlS9zlQPmTWNEMXCfYJZG_AJxq1XjME4ns9nJ6ajgVXJF6yX_PiBPmjTsMxfwe0850ee3yK7U--Qcw_CEKPf89d_LaVKaV0SmN5u4SFtU-w5HBgw23VZ39pvD6EZr2hH2-9dvyr9kp7-wdN3CC_Sy3HwGcxDps1-R1sF7NguXQQZPLs68dV6PqT-9g-YsOcdSnolIj5z3mS6W8K5FvCiDHVDizS-MFEYATY3b0ps4OvKqGN_W7N7gdY8OzJGRMwfbGZmYggm5Tf=w1114-h972-no" title="Eilean Donan Castle, Scotland" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/fJbyUyifUqeMEGW7Izk836oS8H7Qtgngks5_oY89U8Hu-RZ00t-njBo_y69hplp-pPHJUXJw3tZrMSv7_5sC7rR0wPrMSNy4GqJwfyqFrStLHLs38AO1JfTMbPPXR3V1fcIRKVhaj7Qk7dduOI4yjZzDbyRpnEG1ARkeFtoTpzsABLIjnrVsta8QbED3q3u2uRt8n0m9kTosef8tvC78CYL-rAPxQN7HLDiGWGCf_lSFqrcF-dfRyWwP_yucD0YzHyHtSHAJch0JN32ayS9hIfzIb_-RrVbogu40P4TKeaD28MB38uPja51fTs624djWnJNztk2v3piYy0yvqy95TTxUGWOoaxsu_L3T8MgMk_Pt3W9TBcvr2zZnbyE5oyFoQUQLZ0fPosC_uxGixY31OxT4Xh-etlioIFUgID_pJyZSrN4lE1zGBykh8ti_CxQmLCREbJU_ENzhppIjyzs6CoQ6vkriujD9D1Aijw8ouSKFS6ZiBk_S0GpywhVsCTM2fF7IpJfQcuIS89WbTrA-wek_NtaFlGCauSK_TxNcPRFCYuSZt6XnDnPE9Uejx-VmPaqYLTNTLfzMk6116g870LDCgeeyTCfI9JrsIXVgqI15LWDglEbIKHU0zxHq5Z3IMzTp9FgSCkOs7H1Xu-dpmW17IFqaufFG=w1199-h899-no" title="Bristol, England" />
            </div>
            <div class="grid-item">
                <img src="https://lh3.googleusercontent.com/MJdQW1jbde5n1rCSXC_ycvXS9XZbDtCSqAEcsCHkXQEmqUs1yVC_ojpiItz9j1r696FBJCL_S2SLvt-9Qp9frdLwQc-YpDHGun3PmWLMO-MHJGp_5VYx5LAidF1Lh3tD9dkvxpESCGzqHyv6konZWpiBxKc38-7EUWY3wCpEsBzQv6UlmY1QcMSA39ooHrgAHDBh5CawhJ0i2NuQUdm78OMH4FApFXOtkxE40SPfPMUUwu-tX82nBRQWE5po9vF0r5TyNKFYHl7fEsXY9LIFTUK1TYMjbupHR5IR2nZH3xqgmvehOu6XvEO2d770vNU_-fAFSEFiTKFHS4p2H9GpwuhPH7p660gOrH3Q2lJUhgoqecm4WibeVPSzBPRf1mZjx9ohpOApcS0V4SDNSyHgDUDLCS_LpHk2Tbzy015Zz0CSrbZpEyPSHhu65uYgnh0e9QCq5Vc9cijyKxTZyYOg_iOM96cISd2OxbY0ZM53Axva1HupsZjL_OTpid5Gn3UPredmSK9Iui-EMZ5dpgOsQk06nNk9XC822YX2pEl-GtjOxkoC64srhXtxFYGJOZIuNeY6QHK6bKfjPASlf3_cwgVwrO7dyXBKhgKk1tWWRCx_dTR-XFzElDyIB1zkmVwzRYs_7YyykVjYLFHGWBXF7uQS2pBO6kv0=w1199-h899-no" title="Fairy Glen, Scotland" />
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import imagesLoaded from 'imagesloaded';
export default {
    mounted () {
      import('masonry-layout').then(masonry => {
        var grid = document.querySelector('.grid');

        var msnry = new masonry.default( grid, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          gutter: 8,
          percentPosition: true
        });

        imagesLoaded( grid ).on( 'progress', function() {
            msnry.layout();
        });
      })
      .catch(err => console.log(err));
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');


.sidebar {
  margin: 0;
  padding: 0px;
  width: auto;
  position: fixed;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar a {
  padding: 10px;
  margin: 20px 8px;
}

.navImages-active {
  height: 36px;
}

.navImages {
  height: 26px;
}

.photoImg {
  height: 50px;
  border-radius: 30%;
}

.container{
  font-family: 'PT Sans', sans-serif;
  text-align: justify;
  padding: 20px;
  max-width: 800px;
  width: 80%;
  margin: 0px auto;
  color: #353839;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-sizer,
.grid-item {
  /*width: 33.333%;*/
  width: 24%;
}

.grid-item {
  float: left;
  margin-bottom: 8px;
}

.grid-item img {
  display: block;
  max-width: 100%;
  border-radius: 5%;
  /*box-shadow: 10px 10px 16px -15px rgba(122,122,122,0.8);*/
}


@media screen and (max-width: 500px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .sidebar a {align-content: center;}
  .grid-sizer, .grid-item {
  width: 48%;
}
}


</style>