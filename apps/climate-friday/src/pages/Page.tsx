import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import React from 'react';
import { Button, Greeting, PostsList } from "ui"; 

import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { api } from '../utils/api';
const Page = () => {

  const { name } = useParams<{ name: string; }>();
  const useQuery = api.hello.greeting.useQuery()
  const usePostsQuery = api.posts.listPosts.useQuery()

  return (
    
    <IonPage>
      <IonContent fullscreen>
        <Button/>
        <Greeting data={useQuery.data}/>
        <PostsList data={usePostsQuery.data || []}/>
      </IonContent>
    </IonPage>
  );
};

export default Page;
