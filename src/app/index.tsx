import { issues } from "@/api/routers/issues";
import { formatDate, normalize } from "@/utils/functions";
import { Box, Text } from "@atoms";
import { Container, FlatList, Icon, TouchableOpacity } from "@components";
import React, { useCallback } from "react";
import { ActivityIndicator, type ListRenderItemInfo } from "react-native";

export default function Page() {
  const { data, isLoading, refetch } = issues.getIssues.useQuery();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Issue>) => (
      <Box width="100%" paddingVertical={4}>
        <Text color={item.isPublished ? "purple500" : "neutral100"}>
          {item.issueTitle}
        </Text>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={3}
        >
          <Text color="neutral500" fontSize={normalize(13)}>
            {formatDate(item.publishDate!)}
          </Text>
        </Box>
      </Box>
    ),
    [],
  );

  if (isLoading) {
    return (
      <Container alignItems="center" justifyContent="center">
        <ActivityIndicator size={normalize(30)} />
      </Container>
    );
  }

  return (
    <Container
      gap={2}
      alignItems="center"
      justifyContent="center"
      paddingHorizontal={3}
      paddingTop={16}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        paddingVertical={2}
      >
        <Text fontWeight="bold" fontSize={normalize(30)}>
          Comic Pulse
        </Text>
        <TouchableOpacity
          padding={2}
          activeOpacity={0.7}
          onPress={() => refetch()}
        >
          <Icon color="neutral300" name="refresh-cw" />
        </TouchableOpacity>
      </Box>
      <FlatList
        data={data?.data.filter((item) => !item.isPublished)}
        width="100%"
        // backgroundColor="purple100"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            borderBottomColor="neutral600"
            borderBottomWidth={1}
            paddingVertical={3}
          >
            <Text fontSize={normalize(16)} color="neutral200">
              Unreleased
            </Text>
          </Box>
        )}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
}
