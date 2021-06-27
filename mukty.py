import sys
import os
import time

key = "[['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]"
keys = f"extra-keys = {key}"

logo = " █▀▀▀█ ▀█▀ █▀▀▀█ ▀▀█▀▀ █▀▀▀ █▀▄▀█\n ▀▀▀▄▄ ░█░ ▀▀▀▄▄ ░▒█░░ █▀▀▀ █▒█▒█\n █▄▄▄█ ▄█▄ █▄▄▄█ ░▒█░░ █▄▄▄ █░░▒█\n  [ AKTIFKAN BOTZ DENGAN MUDAH ]"
menu = "\n\n[1] AKTIFKAN BOTZ\n[2] INSTALL NODE_MODULES\n[3] INSTALL EXTRA KEY\n[4] CONTACK\n[5] EXIT\n"

print(logo)
print(menu)
pil = input("[•] PILIH SALAH SATU : ")
if pil == "1":
     os.system("clear")
     print("[•] MENGAKTIFKAN BOTZ ...")
     time.sleep(1)
     os.system("clear")
     os.system("node mukty.js")

elif pil == "2":
     os.system("clear")
     print("[•] MENYIAPKAN INSTALLER ...")
     time.sleep(2)
     os.system("clear")
     os.system("bash install.sh")

elif pil == "3":
     os.system("clear")
     print("[•] MEMASANG EXTRA KEY ...")
     open('/data/data/com.termux/files/home/.termux/termux.properties','w').write(keys)
     time.sleep(1)
     os.system("termux-reload-settings")

elif pil == "4":
     os.system("clear")
     print("{\n   wa: 081393668101\n   fb: Fhans Dz\n   ig: Riripii104\n}")

elif pil == "5":
     sys.stdout

else:
     print("[!] PILIH LAH GOBLOK!!")
     time.sleep(1)
     sys.restart


