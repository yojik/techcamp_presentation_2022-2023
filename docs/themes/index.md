---
marp: true
theme: gaia
size: 16:9 
paginate: true 
footer: "2021TechCampテーマ発表 ES1-1 菅野 洋史"
style: |
    section.title * , h1{
        text-align: center;
    }

---
<!-- _class: title -->
# 2021年度 テックキャンプテーマ

<br>
<br>
<br>
<br>
<br>
<br>

ES1-1 菅野 洋史

---

## 1. 昨年度テーマ
- スマホのWebブラウザベースの共有仮想空間チャットツール
- 特徴
  - スマホをアバターの視点と同期させて「仮想空間を覗き込む」感覚で利用する。
    -  immersive-ARの機能を使い、位置情報もマッピングする(スマホを持って実際に歩くと反映される)
  - 相手からはスマホの位置や角度が反映されたアバターが見える
---
### 1.1. 内容(出来たところまで)
- aframe/netwroked-aframeを使い、仮想空間上でアバターを出現させる。
- 同じURLにアクセスしたクライアントでWebSocketで情報交換、お互いアバターを出現させて共有の仮想空間を構成した。
- immersive-ARモードで位置情報も同期されることを確認した
- vue.js を利用して既存のWebフレームワークに組み込む形で構築した。

---

### 1.2. 反省
- 結局 aframe/networked-aframe のサンプルに過ぎない
- スマホ位置=仮想カメラ位置=アバター位置を同期させる発想に原理的な無理がある。
  - アバターが抽象的な球等なら良いが、人間型では無理な姿勢にスマホを移動すれば矛盾が発生する
- networked-aframe のバグに当たり進捗が止まった
- WebXRDeviceAPIがかなり不安定 (特にimmersive-ARモード)
- ↑ iOSが対応しない予感

--- 

### 1.3. 根本的な反省

#### 完成されたVRチャットが既に沢山あるのでモチベーションが持続できなかった
- VRChat
- Cluster
- MozilalHub 
  - (これが一番ビジネス用途には簡単です)

--- 

### 1.4.反省を活かして

今年のテーマ決めにあたってのポイント

- 仮想空間とリモート対話という基本線は維持したい
- 通信関連(WebRTC等)をもっと深耕する
- ツールとしてスマホを使うというのも維持したい
- WebXR(特にAR)については少し後退する
- しょぼくてもちゃんと組み上げる
- 既存のツールは参考にするが、そこまで気にしない

---

## 2. 2021年度テーマ

---
### 2.1. 仮想空間での共有オブジェクトの研究

遠隔地同士で、仮想空間に入りオブジェクトをリアルタイム共有し共同作業できるようなシステムを構築する。

同種の製品と違うのは、スマホで手軽に利用でき、簡単にサーバサイド含めてセットアップできること

--- 

### 2.2. 例

例: MozillaHubで仮想空間上でスマホカメラの画像共有をしている例

![height:300](./mh02.png) ![height:300](./mh01.png)

---


### 2.3. 技術要素と探求ポイント

---
#### 2.3.1.  Web技術を利用した仮想空間構築

クライアントサイドは全てWebブラウザで動作するような技術スタックで構築を行う
- aframe 
  - マークアップ言語で仮想空間構築
- networked-aframe
  - aframeオブジェクトを複数環境で同期する
- webrtc/websocket 
  - 通信関連
---
#### 2.3.2. 仮想空間でのユーザインタフェース 

スマホを利用して仮想空間を操作するためのUIコンポーネント構築を行う。

- aframe(再掲) 
  - aframe用のUIコンポーネントとして構築する
- WebXR Device API / Dom Overlay
  - WebXRコンテンツにDomオブジェクトを重ねる仕組み

---
#### 2.3.3. その他

- VRM 
  - VRアプリケーション向けの人型3Dアバターライブラリ
- svelete   
  - JavaScript framework アプリ全体のコンテナとして利用する

---
## 2.4. 未来像

将来は仮想空間もユーザインタフェースの選択肢の一つになる。通常のWebベースの業務アプリを作るのと同じような技術スタックで構築できるようにする。

---
## 2.5. 活動計画

- 第1四半期(基本調査)
- 第2四半期(プロトタイプ1:環境整備・技術検証)
- 第3四半期(プロトタイプ2:アイディア検証・考えたことが無理なら方向転換)
- 第4四半期(プロトタイプ3)


---
## 2.6. 購入予定の品目（クラウドも含めて)
<未定>

---