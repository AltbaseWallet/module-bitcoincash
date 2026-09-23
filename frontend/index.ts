import { defineCoinModule } from '../../../src/coin-modules/types'

export default defineCoinModule({
  id: 'bitcoincash', name: 'Bitcoin Cash', ticker: 'BCH',
  networkId: 'bitcoincash-mainnet', supportsMemo: false, satsPerCoin: 100000000,
  utxoReadProfile: 'electrum',
  cryptoParams: {
    p2pkhPrefix: 0, p2shPrefix: 5, wifPrefix: 128,
    derivationPath: "m/44'/145'/0'/0/0", addressType: 'p2pkh', txVersion: 2,
    cashaddrPrefix: 'bitcoincash', sighashStyle: 'bip143-forkid',
  },
})
