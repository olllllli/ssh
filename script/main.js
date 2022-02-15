const ssh_keys = {
    "personal": {
        "pc": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCfHGUBDEyvzqCmFKNeuIAcJMbH/9wHSlCdK9USdj/+PZg0KbzkkEU9EXNZAlv8LqG5x6aIuorYbkIqJupmAvb0xlH1Eq6md2okKBk53fjKTAcSiHpO2VacfuKMlle/ctWTmAvDaPig1SjDPoTtOK3KiRs/Crd2WBMppv9FIAPe6AhW8MaJL+DDoN4haIEzrXPWblzeUeA4VwscTuRPB6DoUgm8GuWOdTfRqYj3N26u+NKta1eOG3dqdEIZpUJhlrApy682f/iVlz0gbTNOCgpCN9RVIcI2ptxTymSP1i2RiRkh/ggujpku4Rj2YvHgr/fNlKb0ZqNEa7s67Jtt6YyP olli@pc",
        "pc_wsl": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDM/O5OoT7q7TbKZ1BN8YUQujj8z5K3FFwGCzwmcP2av6y7sYYmBHcIhThedE1yUmD+RSvODoAtAZ1jojcE/4QovsloLAn4aMKzNjAPkggp8ywbA/83gvkymHuu1ylnn02nGKyvmDUzTzkn8kNf//Tqnh0go8XpAQMiLHjLgYratxlzsQMXljEavf0RUe6Lm6Yi/DcTtct0ON5/HsOZCbk8VFLLmvbKs2KIGCn0pwyZJlFOYR4htQEUI4IwH0+GP8RbWbxS6ft8WphpRr4Bjcvw1Fu17YaGyyzYkz0KV2Bd5hBCVNlPqQQ50MSdhETYvf7hz8kOsNNEYKE8zXkzDOoWl8Ij5yjYdrxNG94E07Yj5IBfq/qB8EHu0m352eNsfdgopCy6kfR8yPfvx+fsWsqvdKIjF6c0s4Vmdw7IP9JjmYWQFz5NnSzBdc8WRXDvaQ7FDo/xHSfnTrpneelFaZE5sXjoS5aOMrXFiXHVXyBx8IHfEWx96S/WtxFEmoujCwU= olli@pc_wsl",
        "mint": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCwDwK5CEPiDAwGnonCI8m13+tgAMWJzedImbnwQj4CVeJj6ghQ0jdag0TZ8O1c2wiG19dFt6Rg5s3x81Whc5xugt7j3jLRP/UM4vTQZ2e07SPnr10HkSMkaZsmCAmf6jO3Emy7XSI+BHN7L05gJ1M5RE6/PpAf/1k4iCQTmMnk0NACDIvF8/+G1jWQwQqYLXGmwjsCTB4F2Us/3xIadi4/yOfxKHkb2QB7CoTXYzwMeZWhxrCqdbGV2yYJqDMB3hzb3du3dzgri5bG2Q1alqdP10/hXIbUCL/UdfHt7OwBLLxKcjQOWSWUBkkyLdCwzP4FjxUy+wT/ngj1gH1Rzz7zF9XS4Dr2iRAiHg3CucCa+edGY5BlNN5h8F6bbPL95LdKEYBrLYTszPIW7UURbErX0I0y1BKXPktJGoYApKoWr8u3qLbY/efM1NkVtfCFxOZvr5xXteQOR1+MfBn2qKaA8x9gHsdEZ72BbtKqr5A4GzQpfrDpjuzhd3rO2o/Ojes= olli@mint",
        "laptop": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3r27DrRiSAYr0vscQ7fZKGmdolIzkYaRGwbkg7LBNLdmqJpFXWaWt2JuClASc9bUfnukebb++loKFgGUDcSmVPsG4g2nRy3nkRwiERwwVRvtRff1uYXdFIl8Hs811Lyh4ICCJsPERqb3s+Y6zpzyca0J16J0HcC0Xpbnsy/ayHw4/B3o6ABmFCTO9UWAYpnosVhe7aRh5dfMK23P44m5zpbp/+NgIgQ+ftq8ro63aUoG/X/fvHmgb7W0VkMOFdZcZkzYZo62tUWCYz9IVd5ujvH7+UrNmRTFv7IES/38TAU1A3HFFq6fXfnk2Vyg/E6hc+DMJ0l9A+Y1BQ9HZG7mL ollib@ollis-laptop",
        "laptop_wsl": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKdv0xxLTbLrV+YcDWu3QTzZpLrWbhrEEt8MB/xooUwZ olli@ollis-laptop-wsl",
        "server": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDmu1OGjwpo9iIUj/lJOFcldcbEO05oaDk15sC6gTj7MqU2BwVqREKCUcFJRuX1lxxbcDxVZqqNdUYKJT3LdBR6vkD/BMPSfNIWKoJ/vBaHo4qDY11aWA1NJRVQXGfUB3EZSsVP9xGAHTgZvOkYyJZcYwLr+C67+9HsGk7W4i/dAbgjl91vjbJPLZZwce7KhkyiaOOiFnwiUgz4OOuPXZvzJ9K5mEsPI6ccr5CAQe6z20Pvvbxc5kZJqJfzmaOwtIw3IBhAYJmN70iM44gitdv24g7KzLBci5Tmi9wGt+O2IMQDY8FNwbJppXj3L77LTk+KMRntSOOt4FeJlnKvRioc7XmBBtE6luRLHIOlY7UcZeHu4cySoX1G+8BkR7DgsSbVk/5GziHoSmcaR8ZrVCN5/SUIqggx/UKWVFAKFTbGviWoPDPVNYDlfX5ADwCPm5vdz1hPwiTCYWsX7DEZL0m3V7iuDKAiPnVHLxALP/9zRgVxFmft47eus9bNzeZ+BVM= olli@server",
        "cse": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDvap1KDHgQI2olZlNImLN8KH8mmu7mfr/J44iIxXUAl9TJCbiieriCLG+RlN4Na9ZCsyhm2TowEyPVWV9EnesGHGMO4LvBiP6uhUn6mv0NjXC5nM+AfIVlqZvWQQpL/tYFPauE+lrq+XYq/79FCYO9jSYGzB/rXg4hxg8vEi8Xy7e76wffZTHuIkpbAihOgPMoiMNX6WHYI0vyzGG3LsWsg8KAfNWs81POAh30CVZN87tpFsu/cFLJwxf6hZFfrjuIwLYbcnh9dBKEYFulBQqdmYsBugdTcWNGXJieTLKh+GPrrIdQ4CU06V6GK6AidA7DQz7Bp6rnf2vJh0DLURGl olli@cse",

    },
    "work": {
        "pc": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDLpirteetMS+/7uVVGJIxrLOpFKDZ9sx4zi9NDo0er4YUkL8d4CyusNc4Kt8qb+axxlL2Pv9cHwtHBjJgHn1bFbISPMd/ZQmvtk6m4H6u7hfJf6a0ncjtLC0sZ8h2dLtw800sL3h5QDA6SZ8xv3IuGuGq3YKMVRxowIn3wJWa6+68OUuwJQ3YFJarFz98Km9cvUtpUA3Q/8de4JRd3pZ1+kPynSSG63lJklOruFYMDsZ6umHz6WM9TWWbS+7qK7GKBgBXNfX8ZuhQ/C1EknHnbvuw3bKEzfvfO40c4QM5FLxozPJ6N9nBnly7IKcElC4WX7boJcLGuWMxNs3CCPj8WXruKQQRILQ3IXvtj1PptEyP+lFcqUlObANHQrDz9LHW0DfY66+bLvd4xlfjmtAt/g9PKGKJbV9RXEpBWpcRCrzWT/pMvJjilZoZVk8xK5WARZnSd8vS4oMu2u+Qt/2d3lksRdieUdoQ45u94q2UY0x9SOjhiPEP9kxaGrSx8VFE= work-olli@pc",

    }
}

var prev = null;

function clipboardKey(event) {
    const ele = event.target;
    const type = ele.getAttribute("type") || "personal";
    const key = ele.getAttribute("key") || "pc";

    const ssh_key = ssh_keys[type][key];

    navigator.clipboard.writeText(ssh_key);

    if (prev != null) {
        prev.removeAttribute("style");
    }
    ele.style.backgroundImage = "url('./img/tick.png')";
    prev = ele;

    console.log("Copied To Clipboard: " + ssh_key);
}