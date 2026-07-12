# Fachanwender-Werkzeuge — Lückenliste (Ergänzung zu tools.md)

Stand: 2026-07-12. Diese Liste erfasst **fehlende** Tools und Ressourcen für Fachanwender
(Digitale Ersthelfer, CSN-Praktiker:innen, Vorfall-Unterstützung) — mit Schwerpunkt auf
**Kommandozeilen- und Bordmitteln je Betriebssystem** sowie freien Fachtools.
Ergänzt [tools.md](tools.md) (dort v. a. GUI-/Web-Tools).

> **Wichtige Rahmung.** Erstmaßnahmen ≠ Gerichtsforensik. Für verwertbare Beweise: qualifizierte
> IT-Forensik hinzuziehen, **Beweiskette (Chain of Custody)** und **Integrität (Hashes)** wahren,
> nur **auf Kopien** arbeiten, und ausschließlich mit **Einwilligung/Auftrag** der betroffenen
> Person handeln. Bei Beziehungsgewalt: Prüfen kann die überwachende Person **alarmieren** —
> immer zuerst Sicherheitsplan (siehe Stalkerware-Leitfaden). Datenschutz (DSGVO) beachten.

---

## 1. Bordmittel-CLI je Betriebssystem (bereits auf dem System vorhanden)

Diese Werkzeuge sind ohne Installation da und für schnelle, nachvollziehbare Erstprüfungen ideal.

### 1.1 Integrität & Beweissicherung (Hashes, Kopien, Metadaten)
| Zweck | macOS / Linux | Windows |
|---|---|---|
| Datei-Hash (SHA-256) | `shasum -a 256 datei` · `sha256sum datei` | `certutil -hashfile datei SHA256` · PowerShell `Get-FileHash datei` |
| Bit-genaue Kopie / Image | `dd if=… of=… bs=4M conv=noerror,sync` | `robocopy` (Dateien); Image via Zusatztool |
| Metadaten anzeigen | `mdls` (macOS) · `stat` | `Get-ItemProperty` · `Get-FileHash` |
| Verzeichnis revisionssicher packen | `tar --xattrs -czf …` | `Compress-Archive` |

### 1.2 Netzwerk & aktive Verbindungen (C2, Exfiltration, Stalkerware)
| Zweck | macOS / Linux | Windows |
|---|---|---|
| Offene Verbindungen + Prozess | `lsof -i` · `ss -tulpen` (Linux) · `netstat -an` | `netstat -anob` · PowerShell `Get-NetTCPConnection` |
| ARP-/LAN-Nachbarn | `arp -a` | `arp -a` · `Get-NetNeighbor` |
| DNS-Auflösung/Prüfung | `dig` · `nslookup` · `host` | `Resolve-DnsName` · `nslookup` |
| Routen/Pfad | `traceroute` | `tracert` · `pathping` |
| Live-Mitschnitt | `tcpdump -i <if> -w mitschnitt.pcap` | `pktmon` (Bordmittel) → dann Wireshark |

### 1.3 Prozesse, Autostart & Persistenz (Spyware/Backdoors)
| Zweck | macOS | Linux | Windows |
|---|---|---|---|
| Laufende Prozesse | `ps aux` · Activity Monitor | `ps auxf` · `top` | `tasklist` · `Get-Process` |
| Autostart/Dienste | `launchctl list`, `~/Library/LaunchAgents`, `/Library/LaunchDaemons` | `systemctl list-unit-files`, `crontab -l`, `/etc/systemd/system` | `Get-CimInstance Win32_StartupCommand`, `schtasks`, `msconfig` |
| **Konfig-/MDM-Profile** (häufiger Überwachungsvektor!) | `profiles list` / `sudo profiles show` | — (Distro-abhängig) | `Get-CimInstance -Namespace root\cimv2\mdm\dmmap …` |
| System-Logs | `log show --last 2h`, `sysdiagnose` | `journalctl -xe`, `dmesg` | `Get-WinEvent` · `wevtutil` |
| Datei nach Zeit/Änderung | `find / -mtime -1`, `fs_usage` | `find`, `inotifywait` | `Get-ChildItem -Recurse | Sort LastWriteTime` |

### 1.4 Datei-/Inhaltsanalyse (schnell, offline)
| Zweck | macOS / Linux | Windows |
|---|---|---|
| Dateityp statt Endung | `file datei` | (WSL/`file`) · PowerShell Signatur-Check |
| Lesbare Strings | `strings -a datei` | `strings.exe` (Sysinternals) |
| Hex-Ansicht | `xxd` · `hexdump -C` | `Format-Hex` |

---

## 2. Fehlende freie Fachtools (Installation nötig) — nach Bereich

### 2.1 Mobilgeräte-Forensik (iOS/Android) — **größte Lücke**
| Tool | Zweck | Plattform |
|---|---|---|
| **MVT — Mobile Verification Toolkit** (Amnesty) | iOS/Android auf Spyware-Spuren/IOCs prüfen (Pegasus u. a.) | CLI, mac/Linux/Win |
| **libimobiledevice** (`idevice*`, `idevicebackup2`) | iOS-Backup/Inspektion ohne iTunes | CLI |
| **adb** (Android Debug Bridge) | `adb shell pm list packages -f`, `adb logcat`, App-Rechte prüfen | CLI |
| **Exodus Privacy** | Tracker/Berechtigungen in Android-Apps aufdecken | Web/App |
| **iVerify** | Mobile-Hardening & Kompromittierungs-Checks | App |
| Hinweis | **iOS Lockdown-Modus** / **Android Sicherheitscheck** als Härtung empfehlen | — |

### 2.2 Malware- & Dokumentanalyse
| Tool | Zweck |
|---|---|
| **ClamAV** (`clamscan -r`) | Freier, skriptbarer Offline-Virenscan (alle OS) |
| **YARA** | Regelbasierte IOC-/Malware-Erkennung |
| **oletools** (`olevba`) | Makros in Office-Dokumenten analysieren |
| **pdfid / pdf-parser** (Didier Stevens) | Verdächtige PDFs zerlegen |
| **Loki** / **THOR Lite** | IOC-Scanner für kompromittierte Systeme |
| **CyberChef** | Dekodieren/Analyse (Base64, Hex, Krypto) — Web/offline |

### 2.3 E-Mail- & Phishing-Analyse (ergänzend zu MXToolbox/VirusTotal)
| Tool | Zweck |
|---|---|
| **swaks** | SMTP/SPF/DKIM/DMARC-Zustellung testen |
| **emlAnalyzer** / **eml_parser** | `.eml`-Header, Links, Anhänge strukturiert prüfen |
| **urlscan.io** · **AbuseIPDB** · **AlienVault OTX** | URL/IP-Reputation & Threat-Intel |

### 2.4 Bild-/Video- & Deepfake-Prüfung
| Tool | Zweck |
|---|---|
| **exiftool** | Metadaten aus Bildern/Videos (Herkunft, GPS, Software) |
| **ffmpeg** / **ImageMagick** (`identify`) | Medien inspizieren/normalisieren |
| **InVID/WeVerify** | Video-Verifikation, Keyframes, Reverse-Search (Browser) |
| **Forensically** | ELA/Rauschanalyse bei Bildmanipulation (Web) |

### 2.5 Datenträger-, Speicher- & Timeline-Forensik
| Tool | Zweck |
|---|---|
| **Autopsy / The Sleuth Kit** (`fls`, `icat`) | Dateisystem-Forensik, gelöschte Dateien |
| **dc3dd / ewfacquire (libewf)** | Forensische Images inkl. Hash |
| **Volatility 3** | RAM-Analyse (`vol -f dump windows.pslist`) |
| **plaso / log2timeline** + **Timesketch** | Super-Timeline erstellen & gemeinsam auswerten |
| **Velociraptor** | Endpoint-DFIR/Live-Response (auch Einzelfall) |

### 2.6 Betroffenen-Exposure mappen (OSINT — nur mit Einwilligung!)
| Tool | Zweck |
|---|---|
| **holehe** | Zu einer E-Mail zugehörige Konten finden |
| **sherlock** / **maigret** | Benutzernamen über Plattformen suchen |
| **HaveIBeenPwned (Domain-/API)** · **HPI ILC** | Datenleck-Betroffenheit (öffentlich im Faktencheck genutzt) |
| Hinweis | Ausschließlich zur **Selbst-Exposure** der betroffenen Person; Ethik/DSGVO |

### 2.7 Sichere Umgebungen, Härtung & Kommunikation
| Tool | Zweck |
|---|---|
| **Tails** (amnesic Live-OS) | Sichere Beratung/Recherche für gefährdete Betroffene |
| **SIFT Workstation** · **CAINE** · **REMnux** | Fertige Forensik-/Malware-Analyse-Distros |
| **KeePassXC** (`keepassxc-cli`) · **veracrypt** · **age**/`gpg` | Passwörter, Container, Verschlüsselung |
| **Signal** · **FIDO2/YubiKey** | Sichere Kommunikation & phishing-resistente 2FA |
| **TinyCheck** (Raspberry Pi) | Bereits in tools.md — für Vor-Ort-Stalkerware-Check |

---

## 3. Fehlende Wissens-/Referenzressourcen
| Ressource | Nutzen |
|---|---|
| **MITRE ATT&CK** (+ **ATT&CK Mobile**) | Taktiken/Techniken einordnen, IOCs strukturieren |
| **NIST SP 800-86** | Leitfaden für forensische Erstmaßnahmen/Beweissicherung |
| **BSI IT-Grundschutz / BSI-Vorfall-Hilfe** | Deutschsprachige Vorgehensmodelle |
| **ENISA — Incident-Response-Material** | Prozesse, Playbooks |
| **SANS DFIR-Poster/Cheatsheets** | Schnellreferenz Windows/Linux/mac-Artefakte |
| **Coalition Against Stalkerware** | Bereits in tools.md — Erkennungs-Playbooks |
| **NNEDV Safety Net / Tech Safety** | Fach-Ressourcen zu technikgestützter Beziehungsgewalt |

---

## 4. Vorschlag: Was davon auf die Website (fachinfo.html / tools.md)?
- **tools.md erweitern** um: Abschnitt „Bordmittel-CLI je OS" (Kap. 1), Mobilgeräte-Forensik
  (MVT, libimobiledevice, adb), Malware/Doku-Analyse (ClamAV, oletools, YARA), Timeline/Disk
  (Sleuth Kit, Volatility), OSINT-Exposure (mit Ethik-Hinweis), Tails/SIFT.
- **fachinfo.html**: kompakte „Erste-Schritte-Checkliste Vorfall" (Sichern → Isolieren →
  Hashen → Dokumentieren → Eskalieren) mit Verweis auf diese Liste.
- **Immer mitliefern:** Ethik-/Rechtsrahmen (Beweiskette, Einwilligung, Alarmierungsrisiko,
  DSGVO) — nicht als Nebensatz, sondern als eigener Kasten.
