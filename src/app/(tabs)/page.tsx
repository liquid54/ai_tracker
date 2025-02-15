import SplitLayout from "@/app/components/split_layout";
import Bin from "@/app/assets/icons/bin";
import Button from "@/app/components/button/Button";
import {ThemedText} from "@/app/components/ThemedText";
import ScrollableContent from "../components/ScrolableContent";
import i18n from "@/app/i18n";

export default function HomePage() {
    const files = [
        {id: 1, name: 'File1.doc'},
        {id: 2, name: 'File2.doc'},
        {id: 3, name: 'File3.doc'},
        {id: 4, name: 'File4.doc'},
        {id: 5, name: 'File5.doc'},
        {id: 6, name: 'File6.doc'},
        {id: 7, name: 'File7.doc'},
        {id: 8, name: 'File8.doc'},
        {id: 9, name: 'File9.doc'},
        {id: 10, name: 'File10.doc'}
    ];

    const ListItem = ({fileName}: {fileName: string}) => (
        <li>
            <div className='py-[8px]'>
                <div className='flex justify-between items-center p-[8px] pb-[1px]'>
                    <ThemedText type='text-medium-grey'>{fileName}</ThemedText>
                    <Bin/>
                </div>
                <hr/>
            </div>
        </li>
    );


    return (
        <SplitLayout>
            <div className='pt-[49px] px-[51px] '>
                <div className='flex flex-col items-center gap-y-4 w-full'>
                    <ThemedText type='heading'>{i18n.t('mainPage.downloadFile')}</ThemedText>
                    <div className='flex gap-x-5 justify-between items-center'>
                        <ThemedText type='text-medium-grey' className='border-1 '>{i18n.t('mainPage.upload')}</ThemedText>
                        <ThemedText type='text'>{i18n.t('mainPage.fileNotSelected')}</ThemedText>
                    </div>
                    <Button>
                        <div>
                            <ThemedText type='text-medium-white'>{i18n.t('mainPage.process')}</ThemedText>
                        </div>
                    </Button>
                </div>

                <div className='pt-[113px] w-full'>
                    <div className='flex justify-center'>
                        <h3 className="text-lg font-medium">{i18n.t('mainPage.history')}</h3>
                    </div>
                    <ul className='pt-[27px]'>
                        {files.map((file) => (
                            <ListItem key={file.id} fileName={file.name}/>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='px-10 py-[86px]'>
                <div className="bg-white rounded-2xl pl-[45px] className='pb-6'">
                    <div className='pb-6 pt-[61px]'>
                        <ThemedText type='heading'>{i18n.t('mainPage.resultAnalyze')}</ThemedText>
                    </div>
                    <ScrollableContent className="flex flex-col pb-[21px] max-h-[50vh] pr-20">
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                        <ThemedText type='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est
                            laborum.
                        </ThemedText>
                    </ScrollableContent>
                </div>
                <div className='flex justify-between items-center pt-12'>
                    <Button>{i18n.t('mainPage.save')}</Button>
                    <Button>{i18n.t('mainPage.download')}</Button>
                </div>
            </div>
        </SplitLayout>
    );
}